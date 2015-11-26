/**
 * Created by gibran on 24/11/15.
 */
app.controller('ProjectsCtrl', function($scope, ProjectsData){
    $scope.data = {};
    $scope.status='';
    getProjects();

    function getProjects(){
        ProjectsData.getProjects()
            .success( function (data) {
                $scope.data.projects = data;
                document.getElementById('spinner').style.display = 'none';
            })
            .error( function (data) {
                $scope.status = 'Failed to fetch data: ' + data;
            });
    };
});


app.controller('DetailsProjectCtrl', function($scope, $stateParams, StacksData, ProjectsData, TasksData){
    $scope.data = {};
    $scope.project = {};

    getProjectProgress($stateParams.projectId);
    getCurrentProject($stateParams.projectId);
    getStacks();


    $scope.toggleGroup = function(stack) {
        stack.show = !stack.show;
    };
    $scope.isGroupShown = function(stack) {
        return stack.show;
    };

    function getStacks() {
        StacksData.getStacks($stateParams.projectId)
            .success( function (data) {
                $scope.data.stacks = data;
                angular.forEach($scope.data.stacks, function(value, key){
                    $scope.data.stacks[key].show = false;

                    TasksData.getTasks($scope.data.stacks[key].id)
                        .success(function(data){
                            $scope.data.stacks[key].items = data;
                            $scope.data.stacks[key].progress = getStackProgress($scope.data.stacks[key]);
                        });
                });
            })
            .error( function (data) {
                $scope.status = 'Failed to fetch data: ' + data;
            });
    };

    function getCurrentProject(id){
        ProjectsData.getProject(id)
            .success(function(data){
                $scope.project =  data;
            })
            .error(function(data){
                $scope.status = 'Failed to fetch data: ' + data;
            });
    }

    function getProjectProgress(id){
        ProjectsData.getProgress($stateParams.projectId)
            .success(function(data){
                $scope.progress = parseInt(data);
            })
            .error(function(data){
               $scope.status = 'Fail to fetch data: '+ data;
            });
    };

    function getStackProgress(stack){
        var ended = 0;
        angular.forEach(stack.items, function(value, key){
            if(value.state == 'E'){
                ended ++;
            }
        });
        var stackProgress =  (ended / stack.items.length) * 100;
        if(isNaN(stackProgress)){
            return 0;
        }else{
            return parseInt(stackProgress);
        }
    }
});