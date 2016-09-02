(function () {
    
    angular.module('app')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'app/views/catalog.html',
            controller: 'catalogController'
        }).when('/cart', {
            templateUrl: 'app/views/cart.html',
            controller: 'cartController'
        });

    }

})();