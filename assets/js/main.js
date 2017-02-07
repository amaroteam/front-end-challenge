window.productsAll = null;
window.sale = new Array();

$(document).ready(function () {

	products();

	$('#order').on('change', function () {
		if($('#order').val() === 'promotion') list(getSales());
		else list(productsAll);
	});

});

const log = (data) => { console.log(data) };
const filterSale = (product) => { return product.on_sale === true };

//Função para a requisição de produtos
const products = () => {
	$.get('/front-end-challenge/objects/products.json', function (response) {
		Object.keys(response).forEach(function (key) {
			productsAll = response[key];
		});

		//console.log(getSales());

		list(productsAll);
	});
}

const getSales = () => productsAll.filter(filterSale);

const list = (products) => {
	var html = products.map(listHTML).join('');
	document.querySelector('[data-list-product]').innerHTML = html;

	$('.product').on('click', function () {
		openInfo($(this));

	});
}

const listHTML = (product) => {
	var html = '<div class="col-xs-12 col-sm-6 col-md-4">';
	html += '<div class="card product" data-product="' + product.name + '">';
	if(product.on_sale == true) html += '<div class="promotion">' + product.discount_percentage + '</div>';
	html += '<img src="' + product.image + '" alt="" class="image">';
	html += '<div class="name">' + product.name + '</div>';

	if(product.on_sale == true) html += '<div class="price --old">' + product.regular_price + '</div>';
	html += '<div class="price">' + product.actual_price + '</div>';
	html += '<div class="installments">' + product.installments + '</div>';
	html += '<a href="#" class="button --default">INFO</a>';
	html += '</div>';
	html += '</div>';

	return html;

}

const openInfo = (element) => {
	const name = element.attr('data-product');
		console.log(name);
		const filterName = (product) => {
			return product.name === name;
		};

	infoHTML(productsAll.filter(filterName));
	
};

const infoHTML = (product) => {
	product = product[0];
	var html = '';
	
	html += '<div class="image-container">';
	html += '<img src="' + product.image + '" alt="" class="image">';
	html += '</div>';
	html += '<div class="info">';
	html += '<div class="name">' + product.name + '</div>';
	if(product.on_sale == true) html += '<div class="price --old"> De: ' + product.regular_price + '</div>';
	html += '<div class="price"> Por: ' + product.actual_price + '</div>';
	html += '<div class="installments"> Em até ' + product.installments + '</div>';

	html += 'Size: <div class="sizes">';

	Object.keys(product.sizes).forEach(function(key) {
		var size = product.sizes[key].size;
		var available = '';
		if(!product.sizes[key].available) available = ' disabled ';

		html += '<input type="radio" name="size" id="' + size + '" class="input"'+ available +'>';
		html += '<label class="label" for="' + size + '">' + size + '</label>';
	});

	html += '</div>';
	html += '<a href="#" class="button --default">Adicionar ao Carrinho</a>';
	html += '</div>';
	
	$('#info-product').html(html);
	console.log(html);
	$('.modal').toggleClass('hide');
}