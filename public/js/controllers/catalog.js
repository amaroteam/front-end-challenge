 angular.module('app').controller('CatalogController', function($scope, $http, $routeParams){
  //VARIABLES
  $scope.catalog = [];
  $scope.availableSizes = [];
  $scope.itemProduct = [];
  $scope.selectedSize= "";
  
   //LOAD ALL PRODUCTS
   $http.get('/data/products')
     .success(function(products){
       $scope.catalog = products;
     }).error(function(erro){
       console.log(erro);
   });

   //GET AVAILABLE SIZES
   $scope.getAvailableSizes = function(product){
      angular.forEach(product,function(product){
          if(product.available == true){
            $scope.availableSizes.push({"size":product.size});
          }
      });
   };

   //PRODUCT'S DETAILS BY ID
   $http.get('data/products/' + $routeParams.id)
     .success(function(product){
       $scope.itemProduct = product;
       $scope.getAvailableSizes(product.sizes);
     }).error(function(erro){
       console.log(erro);
   });

    //CONVERT PRICE TO NUMBER
   $scope.priceToNumber = function(element){
      element = element.replace("R$", "").replace(",", ".");
      element = parseFloat(element);
      return element;
   };

   //GET THE PRICE
   $scope.getPrice = function(itemCart){
      $scope.regularPrice = $scope.priceToNumber($scope.itemProduct.regular_price);
      $scope.actualPrice = $scope.priceToNumber($scope.itemProduct.actual_price);
      if( $scope.actualPrice < $scope.regularPrice){
          $scope.price = $scope.actualPrice;
      }else if($scope.actualPrice >= $scope.regularPrice){
          $scope.price = $scope.regularPrice;
      }
      console.log($scope.price);
      console.log($scope.selectedSize);
   }

});






































