'use strict';

app.controller('loginCtrl', function($scope, loginService){
	$scope.errorLogin = false;
	$scope.successLogin = false;

	$scope.login = function(user){
		loginService.login(user, $scope);
	/*	$scope.uname=user;*/
		console.log(user);

	}



	$scope.clearMsg = function(){
		$scope.errorLogin = false;
		$scope.successLogin = false;
	}

	
});