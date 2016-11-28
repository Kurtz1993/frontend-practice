(function (ng) {
    ng.module('gameWorldApp').controller('gameListController', ['$http', '$mdDialog',
        function ($http, $mdDialog) {
            var vm = this;
            vm.title = 'Game list';
            var loadGames = function () {
                $http.get('api/games').then(function (response) {
                    vm.games = response.data;
                }, function (response) {
                    console.log("error getting games" + response.data)
                });
            };
            loadGames();
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
                        loadGames();
                    }, function (response) {
                        toastr.error('Could not delete game, please try again later ' + response.data);

                    }).finally(function () {

                    });
                });
            };
        }]);
})(window.angular);