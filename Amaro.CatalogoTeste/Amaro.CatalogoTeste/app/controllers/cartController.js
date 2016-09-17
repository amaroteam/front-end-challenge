(function () {

    angular.module('app')
        .controller('cartController', cartController);

    cartController.$inject = ['$scope', 'localStorageService'];

    function cartController($scope, localStorageService) {


        $scope.isValidImg = isValidImg;
		
		$scope.AddToCart = AddToCart;

        $scope.cart = new CartVm();
        $scope.cart.itens = localStorageService.get("productsCart") == null ? [] : localStorageService.get("productsCart").itens;

        //var total = cart.getTotal();
			
		function AddToCart(product, qtd) {
            
            var cartItemVm = new CartItem(product.name, qtd, product.image, product.actual_price, product.size);
            var cart = new CartVm();

            if (localStorageService.get("productsCart") != null) {
                cart.itens = localStorageService.get("productsCart").itens;
            }
			
			//Como não há banco, estou salvando os itens no session Storage para não perder os itens do catalogo para o carrinho
				cart.addItem(cartItemVm, qtd)
			
				localStorageService.set('productsCart', cart);
				$scope.cartQtd = cart.getQtdItem();
				product.qtd = product.qtd + qtd;

        }
		

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