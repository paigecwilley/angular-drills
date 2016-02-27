app.controller('mainCtrl', function($scope, mainSrvc){

mainSrvc.getPeople()
.then(function(response){
 $scope.person = response.data;
});


})

