angular.module("controllers")
       .controller("controllerA",MainCtrl);

MainCtrl.$inject = ["$scope"];

function MainCtrl($scope){
	$scope.title = "controllerA Title";
}