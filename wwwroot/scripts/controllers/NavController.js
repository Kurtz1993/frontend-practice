app.controller('NavController', ['$scope', '$location',function($scope,$location){

$scope.navigate = function(route) {
    $location.path('/' + route);
};

}]);