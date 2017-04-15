angular.module("ntask").factory('taskService', function($http, sessionService){
	var baseUrl = "http://localhost:3000"
	var taskService = {}
	var token = sessionService.currentUser().token
	taskService.all = function(){
		console.log(token)
		return $http.get(baseUrl + "/tasks",{headers:{ "authorization": token}})
	}

	taskService.get = function(id){
		return $http.get(baseUrl + "/tasks/" + id, {headers:{ "authorization": token}})
	}

	taskService.create = function(task){
		console.log(task)
		return $http.post(baseUrl + "/tasks", task, {headers:{ "authorization": token}})
	}

	taskService.update = function(task){
		return $http.put(baseUrl + "/tasks/" + task.id, task, {headers:{ "authorization": token}})
	}

	taskService.destroy = function(id){
		return $http.delete(baseUrl + "/tasks/" + id, {headers:{ "authorization": token}})
	}

	return taskService
})