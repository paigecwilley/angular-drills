app.service('mainSrvc', function($http){

var baseUrl = 'http://swapi.co/';
	
	this.getPeople = function(){
		return $http({
			method: 'GET',
			url: baseUrl + '/api/people/1'
		})
	}
})