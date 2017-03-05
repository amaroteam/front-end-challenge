$(document).ready(function() {

	listarProdutos();


});


//catalogo = $.parseHTML(catalogo);
//console.log("catalogo " + catalogo.find('btn-tam'));

//for (var j = 0; j < json.products[i].sizes.length; j++) {
    //"<span>L"+json.products[i].sizes[0]+"</span>";
	//$(catalogo).find(".btn-tam").append("<span>L"+json.products[i].sizes[0].size+"</span>");
	//console.log("asdf " + $(catalogo).find(".btn-tam").text() );
//}

function listarProdutos(){
	$.ajax({
		type: "GET",
		url: "db/products.json",
		dataType: "json",
		contentType: 'application/json',
		success: function(data) {
			
			var json = JSON.stringify(data);
			json = JSON.parse(json);
			var quantidadeProdutos = json.products.length;

			for (var i = 0; i < quantidadeProdutos; i++){

var detalheProduto = $("#catalogo-produtos div").first().clone();
detalheProduto.find('.produto-imagem').attr('src', json.products[i].image);
detalheProduto.find('a.produto-nome').append(json.products[i].name);
detalheProduto.find('.produto-preco').append(json.products[i].regular_price);
detalheProduto.find('.produto-desconto').append(json.products[i].discount_percentage + "<span> de desconto.</span>");
detalheProduto.find('.produto-preco-desconto').append(json.products[i].actual_price);
detalheProduto.find('.produto-parcelas').append("<span>Parcelas de </span>" + json.products[i].installments);

for (var j = 0; j < json.products[i].sizes.length; j++) {
	detalheProduto.find('.btn-tam').append('<span>'+json.products[i].sizes[j].size+'</span>');
}

$("#catalogo-produtos").append(detalheProduto);

detalheProduto.fadeIn();


			}

		},
		error: function(data){
			console.log("Error " + JSON.stringify(data));	
		}
		//complete: function(data){
			//console.log("complete " + JSON.stringify(data));
		//}

	});// end - ajax


}//end - listarProdutos