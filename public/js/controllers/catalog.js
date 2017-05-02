 angular.module('app').controller('CatalogController', function($scope, $http, $routeParams, $location){
  //VARIABLES
  $scope.catalog = [];
  $scope.availableSizes = [];
  $scope.itemProduct = [];
  $scope.selectedSize = "";
  $scope.message = "";
  $scope.qtd = 1;
  $scope.id = 0;
  $scope.totalQtd = 0;

  
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

   //LOAD CART'S PRODUCTS
     $http.get('/data/cart')
     .success(function(cart){
       $scope.itemsCart = cart;
       angular.forEach($scope.itemsCart, function(){
            $scope.id += 1;
            $scope.totalQtd += 1;
       });
     }).error(function(erro){
       console.log(erro);
     });

   //ADD TO CART
    $scope.addToCart = function(itemProduct){
      $scope.price = $scope.priceToNumber($scope.itemProduct.actual_price);
      $scope.productExist(itemProduct);
    };

    //POST TO CART
    $scope.postToCart = function(itemProduct){
      if($scope.sizeForm.$valid){
          $http.post('/data/cart',
          {
            "id":    $scope.id,
            "name":  $scope.itemProduct.name,
            "color": $scope.itemProduct.color,
            "price": $scope.price,
            "qtd":   $scope.qtd,
            "size":  $scope.selectedSize
          })
          .success(function(){
            location.reload(); 
            $location.path("cart");
            $scope.message = "Produto adicionado com sucesso";
          }).error(function(erro){
           console.log(erro);
          });
      }
    };

    //VERIFY IF THE PRODUCT IS ALREADY IN THE CART
    $scope.productExist = function(itemProduct){
      var exist = false
      for(var i = 0 ; i< $scope.itemsCart.length; i++){
        if($scope.itemsCart[i].name== itemProduct.name && $scope.itemsCart[i].size == $scope.selectedSize){
          exist = true;
          $scope.message = "Produto já adicionado ao carrinho";
        }
      }if(!exist)
      $scope.postToCart(itemProduct);
    };

});






































