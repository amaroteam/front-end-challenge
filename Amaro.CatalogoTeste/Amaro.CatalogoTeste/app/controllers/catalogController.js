(function () {
    
    angular.module('app')
        .controller('catalogController', catalogController);

    catalogController.$inject = ['$scope', '$http', 'catalogService', 'localStorageService'];

    

    function catalogController($scope, $http, catalogService, localStorageService) {

        catalogService.productsList().then(success, error);
        
        $scope.products = [];
		$scope.sizeVal = sizeVal;
		$scope.sizeC = "";
		$scope.sizeCart = [];
        $scope.isValidImg = isValidImg;
        $scope.isValidSale = isValidSale;
        $scope.addCart = addCart;
        $scope.cartProduct = [];
        $scope.cartQtd = localStorageService.get("productsCart") == null ? 0 : localStorageService.get("productsCart").length;
        $scope.selectCatalog = ['On Sale'];
        $scope.selected = '';

        function success(list) {
            $scope.products = list.data.products;
            //console.log($scope.products);
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
            
			if($scope.sizeC == ""){
				swal("Oops", "Por favor, escolha um tamanho.","error");
				
			}else{
				var cartItemVm = new CartItem(product.name, 1, product.image, product.actual_price, $scope.sizeC);
				var cart = new CartVm();

				if (localStorageService.get("productsCart") != null) {
					cart.itens = localStorageService.get("productsCart").itens;
				}
				swal("Boa escolha!", "Você adicionou esse item ao carrinho!", "success")

				//Como não há banco, estou salvando os itens no session Storage para não perder os itens do carrinho
				cart.addItem(cartItemVm, 1)
				localStorageService.set('productsCart', cart);
				$scope.cartQtd = cart.getQtdItem();	
				$scope.sizeC = "";
				
			}
			
            
        }
        //salva o tamanho selecionado		
		function sizeVal(size){
			$scope.sizeC = size;
		}
        
    }
    
})();