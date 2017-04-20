(function(){
	
	angular.module('app')
		.config(function(localStorageServiceProvider){
		localStorageServiceProvider
			.setStorageType('sessionStorage');
	});
	
})();