angular.module("ntask").controller('authController', function($scope, sessionService, $location, authService){
	var session = sessionService
	$scope.user = {}

	$scope.signin = function(){
		authService.signin($scope.user).then(function(user){
			let currentUser = user.data.user
			currentUser.token = 'JWT '+ user.data.token
			//console.log(currentUser)
			session.create(currentUser)
			$scope.user = {}
			$location.path("/")
		}).catch(function(error){
			console.log(error)
		})
	}

	$scope.signup = function(){
		authService.signup($scope.user).then(function(user){
			session.create(user.data)
			$scope.user = {}
			$location.path("/")

		}).catch(function(error){
			console.log(error)
		})
	}
})