(function (ng) {
    var app = ng.module('gameWorldApp', ['ui.router', 'ui.bootstrap', 'ngMaterial']);

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: '/views/list.html'
        }).state('add', {
            url: '/add',
            templateUrl: '/views/add.html'
        }).state('edit', {
            url: '/edit/{gameId}',
            templateUrl: '/views/edit.html'
        });

        $urlRouterProvider.otherwise('/home');
    }]);
})(window.angular);