angular.module("ntask").config(function($routeProvider) {
	$routeProvider.when("/",{
		templateUrl: "/views/home/index.html"
	}).when("/entrar",{
		templateUrl: "/views/session/login.html",
		controller: "authController"
	}).when("/cadastrar",{
		templateUrl: "/views/session/signup.html",
		controller: "authController"
	}).when("/tarefas", {
		templateUrl: "/views/tasks/index.html",
		controller: "taskController"
	}).when("/editar/:id/tarefa", {
		templateUrl: "/views/tasks/edit.html",
		controller: "taskController"
	}).when("/nova/tarefa", {
		templateUrl: "/views/tasks/new.html",
		controller: "taskController"
	}).otherwise("/")
})