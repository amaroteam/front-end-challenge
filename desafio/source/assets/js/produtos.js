$(document).ready(function(){

	$("select.form-control").change(function(event) {

		//Faz o request ajax para trazer os produtos
		produtos();

	});//end - select.form-control

	//Faz o request ajax para trazer os produtos
	produtos();

});//end document.ready

//Função que ativa os atributos dos produtos como cor e tamanho
function atributosProduto(){

	$(".detalhe-produto ul").find('li').click(function(event) {

		var className = $(this).parent("ul").attr('class');

		$(this).parent("."+className).find("li").each(function(index, el) {

	 		$(this).removeClass('active');
			$(this).find('input').removeAttr('checked');

		});

		$(this).addClass('active');
		$(this).find('input').attr('checked', 'checked');

	});//end - detalhe-produto ul

}//end - atributos produto

//Lista e valida os produtos listados
function produtos(){

	$.ajax({
		type: "GET",
		url: "db/products.json",
		dataType: "json",
		contentType: 'application/json',
		success: function(data) {

			var json = JSON.stringify(data);
			json = JSON.parse(json);
			var selectValorPromocao = validaTipoBuscaProdutos();
			var quantidadeProdutos = json.products.length;
			$("#catalogo-produtos > div:not(:first-child)").remove();

			for (var i = 0; i < quantidadeProdutos; i++){

				//Atribuindo os dados dos produtos as variáveis
				var detalheProduto 			= $("#catalogo-produtos div").first().clone();
				var imagemProduto 			= detalheProduto.find('.produto-imagem');
				var nomeProduto 			= detalheProduto.find('a.produto-nome');
				var precoProduto 			= detalheProduto.find('.produto-preco');
				var precoDescontoProduto 	= detalheProduto.find('.produto-preco-desconto');
				var descontoProduto 		= detalheProduto.find('.produto-desconto');
				var parcelasProduto 		= detalheProduto.find('.produto-parcelas');
				var corProduto 				= detalheProduto.find('.btn-cor');
				var flagPromocaoProduto 	= json.products[i].on_sale;

				if( selectValorPromocao === json.products[i].on_sale){

					listaProdutos(i,json,selectValorPromocao,detalheProduto,imagemProduto,nomeProduto,precoProduto,precoDescontoProduto,descontoProduto,parcelasProduto,corProduto,flagPromocaoProduto);

				} else if(selectValorPromocao === "all"){

					listaProdutos(i,json,selectValorPromocao,detalheProduto,imagemProduto,nomeProduto,precoProduto,precoDescontoProduto,descontoProduto,parcelasProduto,corProduto,flagPromocaoProduto);

				}

			}//end for - quantidade produtos

		},
		error: function(data){
			console.log("Error " + JSON.stringify(data));
		},
		complete: function(){

			//Marca os atributos do produto
			atributosProduto();

			//Clique comprar faz a validação do produto clicado
			clickComprar();

		}//end - complete

	});// end - ajax

}//end - produtos

function clickComprar(){
	//Click comprar
	$("a.btn-comprar").click(function(event) {

		validaCompra($(this).parents(".detalhe-produto"));

	});//end - a.btn-comprar
}

function validaTipoBuscaProdutos(){

	var selectValorPromocao = $("select.form-control").find('option:selected').attr('value');

	if(selectValorPromocao === "on_sale") {

		return selectValorPromocao = true;

	} else if(selectValorPromocao === "off_sale"){

		return selectValorPromocao = false;

	}else if(selectValorPromocao === "all"){

		return selectValorPromocao;

	}//end - if else if

}//end - validaBuscaProdutos

//Function lista produtos
function listaProdutos(index,dataJson,flagLista,boxProduto,imagem,nome,preco,precoDesconto,desconto,parcelas,cor,flagPromocao){

	//Validação detalhes do produto
	dataJson.products[index].image !== "" ? imagem.attr('src',dataJson.products[index].image) : imagem.attr('src', 'assets/img/global/indisponivel.png');
	dataJson.products[index].name !== "" ? nome.append(dataJson.products[index].name) : nome.append("PRODUTO AMARO");
	dataJson.products[index].installments !== "" ? parcelas.append("<span>Parcelas de </span>" + dataJson.products[index].installments) : parcelas.append("");
	dataJson.products[index].color !== "" ? cor.append("<li class='"+dataJson.products[index].color+"'>"+"<input type='radio' name='cor' value='"+dataJson.products[index].color+"'>" + dataJson.products[index].color +"</li>") : cor.append("");

	//If de verificação dos produtos em promoção
	if (dataJson.products[index].on_sale !== true) {

		preco.append(dataJson.products[index].regular_price);
		desconto.remove();

	} else{

		preco.append("Por: " + dataJson.products[index].actual_price);
		precoDesconto.append("De: " + dataJson.products[index].regular_price);
		desconto.append("<span class='"+flagPromocao+"'>" + dataJson.products[index].discount_percentage + "<span> de desconto</span></span>");

	}//end - if promocao

	//Verificação dos tamanhos disponíveis
	for (var j = 0; j < dataJson.products[index].sizes.length; j++) {

		if( dataJson.products[index].sizes[j].available === true ){

			if (dataJson.products[index].sizes[j].size === "U" && dataJson.products[index].sizes[j].available === true) {

				boxProduto.find('.btn-tam').append("<li class='"+dataJson.products[index].sizes[j].size+"'>"+"<input type='radio' name='tamanho' value='"+dataJson.products[index].sizes[j].size+"'>ÚNICO</li>");

			} else {

				boxProduto.find('.btn-tam').append("<li class='"+dataJson.products[index].sizes[j].size+"'>"+"<input type='radio' name='tamanho' value='"+dataJson.products[index].sizes[j].size+"'>" + dataJson.products[index].sizes[j].size +"</li>");

			}//end - if else

		}//end - if

	}//end for

	$("#catalogo-produtos").append(boxProduto);
	boxProduto.fadeIn();

}//end - produtos