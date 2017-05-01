angular.module('app',['ngRoute'])
  .config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider
     .when('/catalog',{
      controller: 'CatalogController',
      templateUrl: 'views/catalog.html'
    })
   .when('/product/:id',{
      controller: 'CatalogController',
      templateUrl: 'views/product.html'
    })
   .when('/cart',{
      controller: 'CatalogController',
      templateUrl: 'views/cart.html'
    })

    $routeProvider.otherwise({ redirectTo:'/catalog'});

});
















