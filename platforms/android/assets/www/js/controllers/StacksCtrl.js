/**
 * Created by gibran on 26/11/15.
 */
app.controller('StacksCtrl', function($scope, $window, $stateParams, $location, ProjectsData, StacksData){
    $scope.data = {};
    getCurrentProject($stateParams.projectId);

    $scope.saveStack = function(newStack){
        newStack.proyectID = $scope.project.id;

            if(newStack.name !== ""){
                StacksData.addStack(newStack).success(function(data){
                    //$location.path('/app/projects/' + $scope.project.id);
                    $window.history.back();
                    $window.location.reload();
                });
            }

    }

    function getCurrentProject(id){
        ProjectsData.getProject(id)
            .success(function(data){
                $scope.project =  data;
            })
            .error(function(data){
                $scope.status = 'Failed to fetch data: ' + data;
            });
    }

});