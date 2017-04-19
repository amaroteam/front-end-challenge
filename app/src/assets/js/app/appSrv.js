
  app.factory('apiConnect', ['$q', '$http', function ($q, $http) {
    return {
      getProducts: function () {

        var deferred = $q.defer(),
            httpPromise = $http.get('products.json');

        httpPromise.then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          console.error(error);
        });

        return deferred.promise;
      },
      getProductsSlug: function (code) {

        var deferred = $q.defer(),
          httpPromise = $http.get('products.json');

          httpPromise.then(function (response) {

          var prod = [];

          angular.forEach(response.data.products, function(value, key){
            if(value.code_color == code) {
              prod.push(value);
            }
          });

          deferred.resolve(prod);

        }, function (error) {
          console.error(error);
        });

        return deferred.promise;
      },
      getProductsCar: function (code) {

        var deferred = $q.defer(),
          httpPromise = $http.get('products.json');

          httpPromise.then(function (response) {

            var prod = [];

            angular.forEach(code, function(cod){
              angular.forEach(response.data.products, function(value, key){
                if(value.code_color == cod.item){
                   prod.push({
                    'qtd': cod.qtd,
                    'name': value.name, 
                    'item': value.code_color,
                    'price': value.actual_price, 
                    'size': cod.size,
                    'color': value.color,
                    'color_slug': value.color_slug,
                    'image': value.image
                  });
                }
              });
            });

          deferred.resolve(prod.reverse());

        }, function (error) {
          console.error(error);
        });

        return deferred.promise;
      },
      getProductsSales: function(){
        var deferred = $q.defer(),
          httpPromise = $http.get('products.json');

          httpPromise.then(function (response) {

          var prod = [];

          angular.forEach(response.data.products, function(value, key){
            if(value.on_sale == true) {
              prod.push(value);
            }
          });

          deferred.resolve(prod);

        }, function (error) {
          console.error(error);
        });

        return deferred.promise;
      }
    };
  }]);

}());