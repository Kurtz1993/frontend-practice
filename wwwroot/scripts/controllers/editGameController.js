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