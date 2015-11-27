/**
 * Created by gibran on 10/11/15.
 */
app.factory('StacksData', ['$http', function($http){

    var urlBase = 'http://c-us.xyz/Sprint/public/api/';
    var StacksData = [];

    StacksData.getStacks = function (idProyect){
        return $http.get( urlBase + 'stacks/proyect/' + idProyect );
    };
    StacksData.getStack = function (idStack) {
        return $http.get( urlBase + 'stacks/' + idStack);
    }

    StacksData.addStack = function(stack){
        return $http.post(urlBase + 'stacks', stack);
    };
    return StacksData;

}]);