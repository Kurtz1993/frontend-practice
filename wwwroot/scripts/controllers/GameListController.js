app.controller('GameListController', ['$scope','$http', '$uibModal',
    function($scope, $http,$uibModal){

        $scope.title = 'Game list';
        $http.get('api/games').then(function(response){
            $scope.games = response.data;
        }, function(response){
            console.log("error getting games" + response.data)
        });

        $scope.deleteGame = function(gameId){

            var modalInstance = $uibModal.open({
                templateUrl: '/views/modals/confirm.html',
                windowTemplateUrl : '/views/modals/confirm.html',
                size: 'sm'
            });



            $http.delete('api/games/'+ gameId).then(function(response){

            }, function(response){

            }).finally(function(){

            });
        };

}]);