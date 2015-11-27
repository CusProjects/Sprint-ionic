/**
 * Created by gibran on 26/11/15.
 */
app.controller('DashboardCtrl', function($scope, DashboardData){
    $scope.data = {};
    $scope.status = "";
    getCurrentUser();
    getTasks();

    function getCurrentUser(){
        $scope.user = DashboardData.getUser();

    }
    function getTasks(){
        DashboardData.getTasks().success(function(data){
            $scope.data.tasks = data;
        });
    }
});