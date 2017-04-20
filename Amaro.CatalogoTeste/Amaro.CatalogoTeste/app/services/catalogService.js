(function () {
    
    angular.module('app')
        .service('catalogService', catalogService);

    catalogService.$inject = ['$http'];

    function catalogService($http) {

        //retorna catalogo de produtos do products.json
        this.productsList = getProducts;

        function getProducts() {

            var url = "app/products.json";
            return $http.get(url);
        }

    }

})();