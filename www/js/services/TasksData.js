app.factory('TasksData', ['$http', function ($http) {
    var urlBase = 'http://c-us.xyz/Sprint/public/api/';
    var TasksData = {};

    TasksData.getTasks = function (idStack) {
        return $http.get(urlBase + 'tasks/stack/' + idStack);
    };

    TasksData.getDifficulty = function () {
        return $http.get(urlBase + 'difficulties');
    };

    TasksData.addTask = function(task){
        return $http.post(urlBase + 'tasks', task);
    }

    return TasksData;
}]);