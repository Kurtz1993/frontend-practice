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