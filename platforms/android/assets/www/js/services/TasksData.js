app.factory('TasksData', ['$http', function ($http) {
    var urlBase = 'http://c-us.xyz/Sprint/public/api/';
    var TasksData = {};

    TasksData.getTasks = function (idStack) {
        return $http.get(urlBase + 'tasks/stack/' + idStack);
    };
    return TasksData;
}]);