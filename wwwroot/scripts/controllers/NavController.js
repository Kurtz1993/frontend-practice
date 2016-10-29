app.controller('NavController', ['$scope', '$state',function($scope,$state){

$scope.navigate = function(route) {
    $state.go(route);
};

}]);