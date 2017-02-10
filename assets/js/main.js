window.productsAll = null;
window.sale = new Array();

$(document).ready(function () {

	products();


	window.localStorage.setItem('list', JSON.stringify([]));

	$('#order').on('change', function () {
		if($('#order').val() === 'promotion') list(getSales());
		else list(productsAll);
	});

	$('#basketOpen').on('click', function (){
		$("#basketList").toggleClass('--hide');
		$("#totalValue").toggleClass('--hide');
	});

});
