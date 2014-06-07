var app = angular.module('invoice', []);
app.controller('bill', ['$scope', function($scope){
	$scope.tax = 0;
	$scope.subTotal = 0;
	$scope.total = 0;
	$scope.products = [];
	$scope.add = function(){
		var q = $scope.quantity;
		var d = $scope.description;
		var r = $scope.rate;
		$scope.products.push(
			{description: d, quantity: q, rate: r}
		);
		$scope.getTotal();
		$scope.description = '';
		$scope.quantity = '';
		$scope.rate = '';
	}
	$scope.remove = function(index){
		$scope.products.splice(index, 1);
		$scope.getTotal();
	}
	$scope.getTotal = function(){
		$scope.subTotal = 0;
		for (var i = 0; i < $scope.products.length; i++) {
			$scope.subTotal = $scope.subTotal + ($scope.products[i].rate * $scope.products[i].quantity);	
		};
		$scope.total = $scope.subTotal + $scope.subTotal * $scope.tax/100;	
	}
	$scope.$watch('tax', function(){
		$scope.getTotal();
	});
}]);