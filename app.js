var app = angular.module("ntask", ['ngRoute', 'ngCookies'])


app.run(function($rootScope, sessionService, $location){
	$rootScope.$on('$routeChangeStart', function(event, current, next){
		//Rotas que podem ser acessadas sem efetuar login
		if (!(current.$$route.originalPath == '/entrar' || current.$$route.originalPath == '/cadastrar' || current.$$route.originalPath == '/')) {
			if (!sessionService.isAuthenticated()) {
				$location.path("/entrar")
			}
		} else {
			next
		}
	})
})
