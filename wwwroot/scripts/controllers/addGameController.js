(function (ng) {
    ng.module('gameWorldApp').controller('addGameController', ['$scope', '$http', '$state', function ($scope, $http, $state) {
        $scope.game = {};

        $scope.createNew = function () {
            $http.post('api/games', $scope.game).then(function (response) {
                toastr.success('Game created');
                $state.go('home');
            }, function (response) {
                toastr.error('There was an error trying to add the new game: ' + response.data);
            }).finally(function () {
            });
        };
    }]);

})(window.angular);