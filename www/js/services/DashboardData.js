/**
 * Created by gibran on 26/11/15.
 */
app.factory('DashboardData', ['$http', function($http){
    var urlBase = 'http://c-us.xyz/Sprint/public/';
    var DashboardData = [];
    var currentUser = {};

    DashboardData.setUser = function(user){
        currentUser = user;
    }
    DashboardData.getUser = function(){
        return currentUser;
    };

    DashboardData.getTasks = function(){
        return $http.get(urlBase + 'api/tasks/user');
    };

    return DashboardData;
}]);