angular.module('register',[])
.controller('RegisterController',['$scope',function($scope){
    $scope.reg={};
    $scope.update=function(user){
        $scope.master=angular.copy(user);
    };
    $scope.reset();
}]);