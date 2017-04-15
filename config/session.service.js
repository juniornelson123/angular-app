angular.module("ntask").service('sessionService', function($cookies){
	var key = "currentUser"
	this.create = function(user){
		$cookies.putObject(key, user)
		console.log($cookies.get(key))
	}

	this.currentUser = function(){
		return $cookies.getObject(key)
	}

	this.setCurrentUser = function(user){
		$cookies.remove(key)
		$cookies.putObject(key, user );
		return $cookies.getObject(key)
	}

	this.destroy = function () {
		$cookies.remove(key)
		
	};	

	this.isAuthenticated = function () {
  		var user = this.currentUser()
  		return !!user
	};
})