//Retorna lista de produtos do carrinho na localStorage
const getListBasket = () => {
	return JSON.parse(window.localStorage.list);
};

//Atualiza a lista de produtos do carrinho na LocalStorage
const updateListBasket = (list) => {
	window.localStorage.setItem('list', JSON.stringify(list));
};

//Adiciona produto no carrinho
const addBasket = (item) => {

	var	list = getListBasket();
	console.log(list);
	list.unshift(item);
	updateListBasket(list);

	var items = listForArray(list);

	return items;

};

//Retorna o preco total da cesta
const priceAll = (items) => {

	const sum = (a, b) => a + b; 
	const replaceSimbol = (item) => item.price.replace('R$ ', '');
	const replaceDot = (price) => parseFloat(price.replace(',', '.'));
	
	return items
			.map(replaceSimbol)
			.map(replaceDot)
			.reduce(sum, 0).toFixed(2);
};

//Evento ao clicar no botão add
const addItemAction = (event) => {
	
	event.preventDefault();
	var size = $('.radio-size:checked').val();
	var code = $('#addItemBasket').attr('data-product');
	
	const filterName = (product) => {
		return product.code_color === code;
	};

	var product = productsAll.filter(filterName);

	const item = {
		'code': product[0].code_color,
		'name': product[0].name,
		'price': product[0].actual_price,
		'size': size
	};


	const items = addBasket(item);
	var html = items.map(listBasketHTML).join('');
	var price = priceAll(items);

	$('#basketList').html(html);
	$('#priceAll').html(price);
	$('#count').html(items.length);

	toggleModal();

	$('.deleteItem').on('click', function (event){
		event.preventDefault();
		removeAction($(this));
	});

};


//Evento ao clicar no botao deletar 
const removeAction = (element) => {

	var code = element.attr('data-product');
	const items = removeBasket(code);
	updateListBasket(items);

	var html = items.map(listBasketHTML).join('');

	var price = priceAll(items);

	$('#basketList').html(html);
	$('#priceAll').html(price);
	$('#count').html(items.length);

	$('.deleteItem').on('click', function (event){
		event.preventDefault();
		removeAction($(this));
	});

}



const removeBasket = (code) => {

	const remove = (item) => item.code.trim() != code.trim();
	const items = getListBasket();
	return items.filter(remove);

};

//Renderiza Produto no carrinho
const listBasketHTML = (product) => {
	html = '<li class="item">';
	html += '<div class="description">';
	html += '<h5 class="name">' + product.name + '<span class="size">' + product.size + '</span></h5>';
	html += '<h5 class="value">' + product.price + '</h5>';
	html += '</div>';
	html += '<a href="#" class="action deleteItem" data-product="' +  product.code + '">X</a>';
	html += '</li>';

	return html;
};