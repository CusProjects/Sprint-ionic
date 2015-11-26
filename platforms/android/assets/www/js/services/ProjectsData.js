app.factory('ProjectsData', ['$http', function($http){
	
	var urlBase = 'http://c-us.xyz/Sprint/public/api/';
	var ProjectsData = [];

    ProjectsData.getProjects =  function(){
		return $http.get(urlBase + 'proyects');
	};

    ProjectsData.getProject = function(id){
		return $http.get(urlBase + 'proyects/' + id);
	};

    ProjectsData.addProject = function(project){
		return $http.post(urlBase + 'proyects', project);
	};

    ProjectsData.getProgress = function(id){
        return $http.get(urlBase + 'proyects/tasks/' +id);
    }
	return ProjectsData;
}]);
