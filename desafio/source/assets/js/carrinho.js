$(document).ready(function() {

	atualizaPrecoTotalCarrinho();
	quantidadeProduto();

}); //end - document.ready


function quantidadeProduto(){

	$(".produto-quantidade button").on("click", function(event) {
	 	var quantidade = parseInt($(this).siblings('input').val());

		if (quantidade <= 1) {
			$(this).siblings('input').attr('value', 1);
		}else if (quantidade >= 99) {
			$(this).siblings('input').attr('value', 99);
		} 
		if(quantidade >= 1 && quantidade <= 99){
			if ($(this).hasClass('qtde-minus')) {
				var valorMenos = quantidade - 1;
				$(this).siblings('input').attr('value', valorMenos);
			};
			if($(this).hasClass('qtde-plus')){
				var valorMais = quantidade + 1;
				$(this).siblings('input').attr('value', valorMais);
			};

		}

		atualizaPrecoTotalCarrinho();
	});

}//end -quantidadeProduto()

function atualizaPrecoTotalCarrinho(){

	//Limpa o campo total
	$(".resultado-preco-total").text("");

	var totalProduto = 0;

	$("#box-carrinho .produtos-carrinho").each(function(index, el) {
		var valorUnitario = $(this).find('.produto-preco').text().trim().replace("R$","");

		//Valida se é promoção
		if (valorUnitario.indexOf("Por") != -1) {
			valorUnitario = valorUnitario.trim().replace("Por:","");
		}
		valorUnitario = parseFloat(valorUnitario.replace( ',', '.' ));
	
		var qtdeProduto = parseInt($(this).find('input.btn-quantidade').attr('value').trim());
		var calculaTotal = valorUnitario * qtdeProduto;
		totalProduto = totalProduto + calculaTotal;
	
	});

	$(".resultado-preco-total").append("R$ " + totalProduto);

}//atualizaPrecoTotalCarrinho

function validaCompra(produto){

	startLoader();

	var flagCor = produto.find('.btn-cor li.active input').attr('checked');
	var flagTamanho = produto.find('.btn-tam li.active input').attr('checked');

	if (flagCor === "checked" && flagTamanho === "checked") {
																																																					
		startLoader();
		verificaProdutosCarrinho(produto);

	}else{

		alert("É necessário escolher a cor e o tamanho do produto!");

	}//end -else

	stopLoader();

}//end - validaCompra

function adicionaCarrinho(produto){

	var imagemProdutoCarrinho = produto.find(".produto-imagem").attr('src');
	var precoProdutoCarrinho = produto.find(".produto-preco").text();
	var nomeProdutoCarrinho = produto.find(".produto-nome").text();
	var corProdutoCarrinho = produto.find(".btn-cor li.active").text();
	var tamanhoProdutoCarrinho = produto.find(".btn-tam li.active").text();

	var boxProdutoCarrinho = "<div class='row produtos-carrinho'>" +
							"<div class='col-xs-4 col-sm-4'>" +
						   		"<img class='produto-imagem' src='"+imagemProdutoCarrinho+"' alt=''>" +
							"</div>" +
							"<div class='col-xs-8 col-sm-8'>" +
								"<div class='caption'>" +
									"<div class='excluir pull-right'>X</div>" +
									"<p class='produto-nome'>"+nomeProdutoCarrinho+"</p>" +
									"<p class='produto-preco'>"+precoProdutoCarrinho+"</p>" +
									"<p class='produto-cor'><span>Cor:</span>"+corProdutoCarrinho+"</p>" +
									"<p class='produto-tamanho'><span>Tamanho:</span> "+tamanhoProdutoCarrinho+"</p>" +
								"</div>" +
							"</div>" +
							"<div class='col-xs-12 col-sm-12'>" +
								"<div class='caption'>" +
									"<h5 class='produto-quantidade'>" +
										"<span class='titulo-quantidade pull-left'>Quantidade:</span>" +
										"<div class='btn-group  pull-right'>" +
										  "<button class='qtde-minus btn btn-default' type='button'>-</button>" +
										  "<input class='btn btn-quantidade' type='text' value='1' placeholder='1' readonly='readonly'>" +
										  "<button class='qtde-plus btn btn-default' type='button'>+</button>" +
										"</div>" +
									"</h5>" +
								"</div>" +
							"</div>";
	
	$("#box-carrinho").append(boxProdutoCarrinho);


	window.setTimeout(function() {
		alert("Produto adicionado ao carrinho!");
	}, 1700);

	quantidadeProduto();
	atualizaPrecoTotalCarrinho();
	excluiProdutoCarrinho();


}//end - adicionaCarrinho

function verificaProdutosCarrinho(produto){

	//comparar: imagem
	var idUrl = produto.find(".produto-imagem").attr('src').replace("https://d2odcms9up7saa.cloudfront.net/appdata/images/products/","");
	var flagTemProdutoCarrinho = 0;
	var flagNaoTemProdutoCarrinho = 0;

	if ( $("#box-carrinho").children('div').hasClass('produtos-carrinho') === false ) {

		stopLoader();
		adicionaCarrinho(produto);
	
	}else{

		$("#box-carrinho").children('.produtos-carrinho').each(function(index, el) {

			var comparaUrl = $(this).find(".produto-imagem").attr('src').replace("https://d2odcms9up7saa.cloudfront.net/appdata/images/products/","");
			
			if ( idUrl !== comparaUrl ){
			
				adicionaCarrinho(produto);
			
			}else{
				
				var quantidadeAtual = parseInt($(this).find('input.btn-quantidade').attr('value'));
				quantidadeAtual = quantidadeAtual + 1;
				$(this).find('input.btn-quantidade').attr('value', quantidadeAtual);

				window.setTimeout(function() {
					alert("Produto adicionado ao carrinho!");
				}, 1700);
			}

		});

	}

}//end - verificaProdutosCarrinho

function excluiProdutoCarrinho(){

	$(".excluir").click(function(event) {

		$(this).parents(".produtos-carrinho").remove();
		atualizaPrecoTotalCarrinho();
	});

}//end - excluiProdutoCarrinho

