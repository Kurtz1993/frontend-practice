app.controller('GameListController', ['$scope', '$http', '$mdDialog',
    function ($scope, $http, $mdDialog) {

        $scope.title = 'Game list';
        var loadGames = function () {
            $http.get('api/games').then(function (response) {
                $scope.games = response.data;
            }, function (response) {
                console.log("error getting games" + response.data)
            });
        };
        loadGames();
        $scope.showConfirm = function (ev, game) {

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