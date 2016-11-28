(function (ng) {
    ng.module('gameWorldApp').controller('editGameController', ['$scope', '$http', '$stateParams', '$state',
        function ($scope, $http, $stateParams, $state) {
            $http.get('api/games/get/' + $stateParams.gameId).then(function (response) {
                $scope.game = response.data;
            }, function (response) {
                toastr.error('There was an error trying to load the selected game. ' + response.data)
            }).finally(function () {

            });

            $scope.update = function () {
                $http.put('api/games', $scope.game).then(function () {
                    toastr.success('Game updated!');
                    $state.go('home');
                }, function (response) {
                    toastr.error('There was an error trying to load the selected game. ' + response.data)
                });
            };
        }]);
})(window.angular);