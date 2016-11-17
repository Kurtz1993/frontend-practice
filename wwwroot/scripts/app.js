var app = angular.module('gameWorldApp',['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url:'/home',
        templateUrl: '/views/list.html'
    }).state('add', {
        url:'/add',
        templateUrl:'/views/add.html'
    }).state('edit',{
        url:'/edit/{gameId}',
        templateUrl: '/views/edit.html'
    })

})