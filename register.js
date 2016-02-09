var app=angular.module("registerlog",[]);
app.controller("register",function($scope){
	$scope.register=function(){alert("Successfully Registerd");};
	$scope.cancel=function(){question("Are you surely want to cancel?")}
});