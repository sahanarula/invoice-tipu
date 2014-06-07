var app = angular.module('invoice', []);
app.controller('bill', ['$scope', function($scope){
	$scope.products = [
		[name: 'sahil', price: '300']
		[name: 'narula', price: '200']
	];
}]);