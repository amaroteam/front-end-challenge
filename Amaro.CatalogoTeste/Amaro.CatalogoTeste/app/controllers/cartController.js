(function () {

    angular.module('app')
        .controller('cartController', cartController);

    cartController.$inject = ['$scope', 'localStorageService'];

    function cartController($scope, localStorageService) {


        $scope.isValidImg = isValidImg;

        $scope.cart = new CartVm();
        $scope.cart.itens = localStorageService.get("productsCart") == null ? [] : localStorageService.get("productsCart").itens;

        //var total = cart.getTotal();



        function isValidImg(product) {
            if (product.image == "") {
                return false;
            }
            else {
                return true;
            }
        }


    };

})();