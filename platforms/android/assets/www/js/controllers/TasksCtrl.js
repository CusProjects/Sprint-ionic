/**
 * Created by gibran on 26/11/15.
 */
app.controller('TasksCtrl', function($scope, $window, $stateParams, StacksData, TasksData){
    $scope.data = {};
    getCurrentStack($stateParams.stackId);
    getDifficulty();

    $scope.saveTask = function(newTask){
        newTask.state = 'F';
        newTask.difficultyID = newTask.difficulty.id;
        newTask.stackID = $scope.stack.id;

        if(typeof newTask.difficultyID !== "undefined" && newTask.name !== ""){
            TasksData.addTask(newTask).success(function(data){
                $window.history.back();
                $window.location.reload();
            });
        }

    };

    function getCurrentStack(id){
        StacksData.getStack(id).success(function(data){
            $scope.stack = data;
        });
    }
    function getDifficulty(){
        TasksData.getDifficulty().success(function(data){
            $scope.data.difficulties = data;
        });
    }

});