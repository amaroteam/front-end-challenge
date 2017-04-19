
/*
** Controller da págia home
*/
app.controller('HomeCtrl', ['$scope', 'apiConnect', '$location', '$routeParams', '$rootScope',  function($scope, apiConnect, $location, $routeParams, $rootScope){

	$scope.products = apiConnect.getProducts()
		.then(function (response) {

		  	$rootScope.loaded = false;
		  	$rootScope.title = "Roupas Femeninas, Vestidos, blusa, Sapatos - AMARO";

		  	$scope.allProducts = response.data.products;

		  	$scope.selectColor = false;
			$scope.selectorClass = false;

			$scope.objectColors = [];

			$scope.addColor = function(){
				if($scope.selectorClass == false){
					$scope.selectorClass = true;
					$scope.selectColor = true;

					$scope.getcolor = function(color, label){
						$scope.selectorClass = false;
						$scope.selectColor = false;

						var arr = {cor: color, text: label};
						var _addColor = true;

						angular.forEach($scope.objectColors, function(value, key){
							if(value['cor'] == color){
								_addColor = false;
							}
						});

						if(_addColor){
							$scope.objectColors.push(arr);

							$scope.removeColor = function(cor){
								angular.forEach($scope.objectColors, function(value, key){
									if(value['cor'] == cor){
										$scope.objectColors.splice(key, 1);
									}
								});
							}
						}
						
					}
				}
				else {
					$scope.selectorClass = false;
					$scope.selectColor = false;
				}
				
			};

		  }, function (error) {
		    console.error(error);
		  });
	

}]);


/*
** Controller da págia do Produto Interna
*/
app.controller('ProductsCtrl', ['$scope', 'apiConnect', '$location', '$routeParams', '$rootScope', '$cookies', function($scope, apiConnect, $location, $routeParams, $rootScope, $cookies){

	var code = $routeParams.code;

	$scope.products = apiConnect.getProductsSlug(code)
		.then(function (response) {

		  	$rootScope.loaded = false;
			$rootScope.title = response[0]['name'] + " - AMARO";

			$scope.getProduct = response;

			$scope.tam = null;
			$scope.validate = false;

			$scope.size = function(size){
				$scope.tam = size;
				$scope.validate = false;
			};

			//Função que chama o click para adicionar um item no carrinho
			$scope.addToCar = function(code, tam){
				if(tam == null){
					$scope.validate = true;
					return false;
				}

				var items_data = $cookies.getObject('items_data');
				var items = [];
				var qtd = 1;

				if(items_data){
					angular.forEach(items_data, function(value, key){
						if(value.item != code || value.size != tam){
							items.push(value);
						}		            
						else {
							qtd = (value.qtd + 1);
						}	
		          	});

					items.push({'item': code, 'size': tam, 'qtd': qtd});
				}
				else {
					items = [{'item': code, 'size': tam, 'qtd': qtd}];
				}

				$cookies.putObject("items_data", items);
				
				$location.path('/sacola');
							
			};

		  }, function (error) {
		    console.error(error);
		  });

}]);

/*
** Controller da págia da Sacola / carrinho
*/
app.controller('SacolaCtrl', ['$scope', 'apiConnect', '$location', '$routeParams', '$rootScope', '$cookies', function($scope, apiConnect, $location, $routeParams, $rootScope, $cookies){

	$rootScope.loaded = false;
	$rootScope.title = "Sacola - AMARO";	

	var items_data = $cookies.getObject('items_data');
	var  codes = [];

	angular.forEach(items_data, function(value, key){
		codes.push({'item': value.item, 'size': value.size, 'qtd': value.qtd});
	});

	//Busca os dados no json
	$scope.getDataJson = function(){
		$scope.items = apiConnect.getProductsCar(codes)
		.then(function (response) {

			$scope.carItems = response;
			$rootScope.totalItemCar = 0;
			var total = 0;
			var totalItems = 0;

			angular.forEach(response, function(value){
				total += parseInt(value.qtd) * convert_money(value.price);
				totalItems += parseInt(value.qtd);
			});

			if(response.length == 0){
				$rootScope.hasItemCar = false;
			}

			$rootScope.totalItemCar = totalItems;
			$scope.priceTotal = round_number(total, 2);

		  }, function (error) {
		    console.error(error);
		  });
	};

	//Função que chama o click para remover irem do carrinho
	$scope.removeItem = function(id, size){

		var cookies = $cookies.getAll();

		angular.forEach(cookies, function(value, key){
			$cookies.remove(key);
		});

		angular.forEach(codes, function(value, key){
			if(value.item == id && value.size == size){
				codes.splice(key, 1);
			}
		});

		$cookies.putObject("items_data", codes);

		$scope.getDataJson();

		return false;
	};

	//Função que chama o click para atualizar irem do carrinho
	$scope.updateQtd = function(id, size, qtd, action){

		var cookies = $cookies.getAll();

		angular.forEach(cookies, function(value, key){
			$cookies.remove(key);
		});

		if(action == 'remove' && qtd == 1){
			angular.forEach(codes, function(value, key){
				if(value.item == id && value.size == size){
					codes.splice(key, 1);
				}
			});
		}

		angular.forEach(codes, function(value, key){
			if(value.item == id && value.size == size){
				var qt  = action == 'add' ? qtd + 1 : qtd - 1;
				codes[key] = ({'item': value.item, 'size': value.size, 'qtd': qt});
			}
		});

		$cookies.putObject("items_data", codes);

		$scope.getDataJson();

		return false;
	};

	$scope.getDataJson();


}]);

/*
** Controller da Página de Produtos em Promoção
*/
app.controller('ProductsSaleCtrl', ['$scope', 'apiConnect', '$location', '$routeParams', '$rootScope',  function($scope, apiConnect, $location, $routeParams, $rootScope){

	$scope.products = apiConnect.getProductsSales()
		.then(function (response) {

		  	$rootScope.loaded = false;
			$rootScope.title = "Produtos em Promoção - AMARO";

			$scope.allProducts = response;

		  }, function (error) {
		    console.error(error);
		  });

}]);

/*
** Controller da Págia 404
*/
app.controller('Page404Ctrl', ['$scope', '$rootScope', function($scope, $rootScope){

	$rootScope.loaded = false;
	$rootScope.title = "Ops. Página  não encontrada - AMARO";	

}]);