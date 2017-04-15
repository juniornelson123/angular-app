angular.module("ntask").controller('navController', function($scope, sessionService, $location){

	$scope.signed = function(){
		return sessionService.isAuthenticated()
	}

	$scope.currentUser = sessionService.currentUser()

	$scope.logout = function(){
		sessionService.destroy()
		$location.path("/")
	}
})