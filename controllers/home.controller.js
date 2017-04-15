angular.module("ntask").controller('homeController', function($scope, sessionService){
	$scope.signed = function(){
		return sessionService.isAuthenticated()
	}
	
})