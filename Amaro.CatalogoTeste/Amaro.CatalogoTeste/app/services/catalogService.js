(function () {
    
    angular.module('app')
        .service('catalogService', catalogService);

    catalogService.$inject = ['$http'];

    function catalogService($http) {

        //retorna catalogo de produtos do products.json
        this.productsList = getProducts;

        function getProducts() {

            var url = "http://localhost:16150/app/products.json";
            return $http.get(url);
        }

    }

})();