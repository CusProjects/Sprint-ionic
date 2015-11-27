/**
 * Created by gibran on 26/11/15.
 */
app.factory('LoginService', ['$http', function($http){

    var urlBase = 'http://c-us.xyz/Sprint/public/';
    var LoginData = [];

    LoginData.login = function(user){
        return $http.post(urlBase + 'login', user);
    };
    return LoginData;
}]);
