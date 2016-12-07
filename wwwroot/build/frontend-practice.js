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
(function (ng) {
    ng.module('gameWorldApp').controller('addGameController', ['$http', '$state', function ($http, $state) {
        var vm = this;
        vm.game = {};

        vm.createNew = function () {
            $http.post('api/games', vm.game).then(function (response) {
                toastr.success('Game created');
                $state.go('home');
            }, function (response) {
                toastr.error('There was an error trying to add the new game: ' + response.data);
            }).finally(function () {
            });
        };
    }]);

})(window.angular);
(function (ng) {
    ng.module('gameWorldApp').controller('editGameController', ['$http', '$stateParams', '$state',
        function ($http, $stateParams, $state) {
            var vm = this;

            $http.get('api/games/get/' + $stateParams.gameId).then(function (response) {
                vm.game = response.data;
            }, function (response) {
                toastr.error('There was an error trying to load the selected game. ' + response.data)
            }).finally(function () {

            });

            vm.update = function () {
                $http.put('api/games', vm.game).then(function () {
                    toastr.success('Game updated!');
                    $state.go('home');
                }, function (response) {
                    toastr.error('There was an error trying to load the selected game. ' + response.data)
                });
            };
        }]);
})(window.angular);
(function (ng) {
    ng.module('gameWorldApp').controller('gameListController', ['$http', '$mdDialog',
        function ($http, $mdDialog) {
            var vm = this;
            vm.title = 'Game list';
            vm.loadGames = function () {
                $http.get('api/games').then(function (response) {
                    vm.games = response.data;
                }, function (response) {
                    console.log("error getting games" + response.data)
                });
            };
            vm.loadGames();
           
        }]);
})(window.angular);
(function (ng) {

    ng.module('gameWorldApp').directive('gameCard', [
        function () {
            return {
                templateUrl: 'scripts/directives/gameCard/gameCard-tpl.html',
                restrict: 'E',
                bindToController: true,
                controller: gameCardController,
                controllerAs: 'vm',
                scope: {
                    games: '=',
                    loadGames: '&'
                }
            }
        }

    ]);

    gameCardController.$inject = ['$http', '$mdDialog'];
    
    function gameCardController($http, $mdDialog) {
        var vm = this;
        vm.showConfirm = function (ev, game) {
            var confirm = $mdDialog.confirm()
                .title('Are you sure you want to delete ' + game.name + '?')
                .textContent('Once deleted you cant recover it')
                .targetEvent(ev)
                .ok('Yes')
                .cancel('Cancel');

            $mdDialog.show(confirm).then(function () {
                $http(
                    {
                        method: 'DELETE',
                        url: 'api/games/'.concat(game.id),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                ).then(function (response) {
                    toastr.success('Game deleted!');
                    vm.loadGames();
                }, function (response) {
                    toastr.error('Could not delete game, please try again later ' + response.data);

                }).finally(function () {

                });
            });
        };
    };

})(window.angular);