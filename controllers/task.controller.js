angular.module("ntask").controller('taskController', function($scope, taskService, $routeParams, $location){
	$scope.tasks = []
	$scope.task = {}

	$scope.getTasks = function(){
		taskService.all().then(function(tasks){
			$scope.tasks = tasks.data.tasks
		}).catch(function(error){
			console.log(error)
		})
	}

	$scope.getTask = function(){
		taskService.get($routeParams.id).then(function(task){
			$scope.task = task.data
			console.log(task)
		}).catch(function(error){
			console.log(error)
		})
	}

	$scope.save = function(){
		if ($routeParams.id) {
			taskService.update($scope.task).then(function(task){
				$location.path("/tarefas")
			}).catch(function(error){
				console.log(error)
			})
		}else{
			taskService.create($scope.task).then(function(task){
				$location.path("/tarefas")
			}).catch(function(error){
				console.log(error)
			})
		}
	}
	$scope.delete = function(task){
		taskService.destroy(task.id).then(function(data){
			$scope.tasks = $scope.tasks.filter(function(value){
				
				if(value != task){
					return value
				} 
				
			})
			
		}).catch(function(error){
			console.log(error)
		})

	}	
})