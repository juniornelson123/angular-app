angular.module("ntask").factory('authService', function($http){
	var authService = {}
	var baseUrl = "http://localhost:3000"
	
	authService.signin = function(user){
		return $http.post(baseUrl+"/signin", {email: user.email, password: user.password})
	}

	authService.signup = function(user){
		return $http.post(baseUrl+"/users", user)
	}

	return authService
})