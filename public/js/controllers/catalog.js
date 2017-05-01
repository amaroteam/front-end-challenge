 angular.module('app').controller('CatalogController', function($scope, $http){
  //VARIABLES
  $scope.catalog = [];

   //LOAD ALL PRODUCTS
   $http.get('/data/products')
   .success(function(products){
     $scope.catalog = products;
   }).error(function(erro){
     console.log(erro);
   });

});






































