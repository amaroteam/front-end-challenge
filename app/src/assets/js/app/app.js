(function(){
	'use strict'

	//Função que arredonda valor quebrado para moedas
	function round_number(value, casas){
		var aux = value.toFixed(casas);
   		return aux;
	}

	//Função que converte a string para dinheiro
	function convert_money(value){
		var aux = value.replace("R$ ", "").replace(",", ".");
		return parseFloat(aux);
	}

	/*
	* Declara o modulo para App
	*/

	var app = angular.module('App', ['ngRoute', 'ngCookies']);

	app.config(['$routeProvider',   function($routeProvider){
		
		$routeProvider

			.when('/', {
				templateUrl: '../src/templates/views/home.html'
			})

			.when('/sacola', {
				templateUrl: '../src/templates/views/sacola.html'
			})

			.when('/produtos/promocoes', {
				templateUrl: '../src/templates/views/produtos-promocoes.html'
			})

			.when('/produto/codigo/:code', {
				templateUrl: '../src/templates/views/produto-interna.html'
			})	

			.otherwise ({ 
				templateUrl: '../src/templates/views/404.html' ,
				controller: 'Page404Ctrl'
			});


	}]);

	/*
	* Cria um filtro para busca produtos pela cor
	*/
	app.filter('filterColor', [function(){

		return function(items, colors){

			var newArray = []; 

			if(colors.length > 0) {
				angular.forEach(colors, function(color){
					angular.forEach(items, function(item){
						if(item.color_slug == color.cor){
							newArray.push(item);
						}
					});
				});
				return newArray;
			}
			else {
				return items;
			}
			
		}

	}]);


	/*
	* Configure rootScope para title e loaded
	*/

	app.run(['$rootScope', '$cookies', function($rootScope, $cookies) {

		$rootScope.$on('$routeChangeStart', function(){

			$rootScope.title = 'Conectando...';
			$rootScope.classMenuMob = '';
			$rootScope.loaded = true;
			$rootScope.hasItemCar = false;
			$rootScope.totalItemCar = 0;

			var cookies = $cookies.getObject('items_data');			

			if(cookies.length > 0){
				var totalItems = 0;
				$rootScope.hasItemCar = true;
				angular.forEach(cookies, function(value, key){
					totalItems += parseInt(value.qtd);
				});
				$rootScope.totalItemCar = totalItems;
			}			

		});

		$rootScope.classMenuMob = '';

		$rootScope.menuMob = function(){
			if($rootScope.classMenuMob == ''){
				$rootScope.classMenuMob = ' active';
			}
			else {
				$rootScope.classMenuMob = '';
			}
		}

	}]);