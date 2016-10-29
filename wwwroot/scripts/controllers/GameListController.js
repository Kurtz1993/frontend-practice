app.controller('GameListController', ['$scope','$http', function($scope, $http){

$scope.title = 'Game list';
$http.get('api/games').then(function(response){
    $scope.games = response.data;
}, function(response){
    console.log("error getting games" + response.data)
});

}]);