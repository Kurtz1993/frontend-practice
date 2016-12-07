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