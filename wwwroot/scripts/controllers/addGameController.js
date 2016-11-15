app.controller('addGameController', ['$scope', '$http', function($scope,$http){
    $scope.game = {};

    $scope.createNew = function(){
        $http.post('api/games', $scope.game).then(function(response){
            toastr.success('Game created');
        }, function(response){
            toastr.error('There was an error trying to add the new game: ' + response.data);
        }).finally(function(){
            
        });
    };

}]);te