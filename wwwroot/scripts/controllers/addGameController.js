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