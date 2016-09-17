(function () {
    
    angular.module('app')
        .controller('catalogController', catalogController);

    catalogController.$inject = ['$scope', '$http', 'catalogService', 'localStorageService'];

    

    function catalogController($scope, $http, catalogService, localStorageService) {

        catalogService.productsList().then(success, error);
        
        $scope.products = [];
        $scope.isValidImg = isValidImg;
        $scope.isValidSale = isValidSale;
        $scope.addCart = addCart;
        $scope.cartProduct = [];
        $scope.cartQtd = localStorageService.get("productsCart") == null ? 0 : localStorageService.get("productsCart").length;
        $scope.selectCatalog = ['On Sale'];
        $scope.selected = '';

        function success(list) {
            $scope.products = list.data.products;
            
        }

        function error(data) {
            alert("não foi possível carregar os produtos");
        }


        function isValidImg(product) {
            if(product.image == ""){
                return false;
            }                                
            else {
                return true;
            }
        }

        function isValidSale(product) {
            if (product.on_sale) {
                return true;
            }
            else {
                return false;
            }
        }

        function addCart(product) {
            
            var cartItemVm = new CartItem(product.name, 1, product.image, product.actual_price);
            var cart = new CartVm();

            if (localStorageService.get("productsCart") != null) {
                cart.itens = localStorageService.get("productsCart").itens;
            }
            swal("Good choice!", "You added this item to the cart!", "success")

            //Como não há banco, estou salvando os itens no local Storage para não perder os itens do carrinho mesmo fechando o navegador
            cart.addItem(cartItemVm)
            localStorageService.set('productsCart', cart);
            $scope.cartQtd = cart.getQtdItem();
        }

        function isSale($scope) {
            if (selected == 'On Sale') {
                
            }
        }
        
        

    }
    
})();