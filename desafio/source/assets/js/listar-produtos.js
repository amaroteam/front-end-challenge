$(document).ready(function() {

	listarProdutos();


});


function listarProdutos(){
	$.ajax({
		type: "GET",
		url: "db/products.json",
		dataType: "json",
		contentType: 'application/json',
		success: function(data) {
			
			var json = JSON.stringify(data);
			json = JSON.parse(json);
			var prodLen = json.products.length;
			
			//console.log("json " + json.products.length);

			for (var i = 0; i < prodLen; i++) {
				//console.log("contando " + i);		
				var catalogo = "<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>" +    
								    "<div class='thumbnail'>" +
								        "<img class='produto-imagem' src='"+json.products[i].image+"' alt='"+json.products[i].name+"'>" +
								        "<div class='caption'>" +
								            "<h5>" +
								            	"<a class='produto-nome' href='#''>"+ json.products[i].name +"</a>" +
								            "</h5>" +
								            "<h5 class='produto-preco'>Pre "+ json.products[i].regular_price +"</h5>" +
								            "<h5 class='produto-desconto'>Des "+json.products[i].discount_percentage+"</h5>" +
								            "<h5 class='produto-preco-desconto'>A "+json.products[i].actual_price+"</h5>" +
								            "<h5 class='produto-parcelas'>P"+json.products[i].installments+"</h5>" +
								        "</div>" +
								        "<a class='btn btn-primary btn-comprar' href='#''>Comprar</a>" +
								        "<div class='ratings'>" +
								            "<p>Tamanhos</p>" +
								            "<p class='btn-tam'>" + 
												"<span>PP</span>" +
												"<span>P</span>" +
												"<span>M</span>" +
												"<span>G</span>" +
												"<span>GG</span>" +
								            "</p>" +
								        "</div><!-- end ratings -->" +
								    "</div><!-- end thumbnail -->" +
								"</div><!-- end col-->";

				$("#catalogo-produtos").append(catalogo);

//for (var j = 0; j < json.products[i].sizes.length; j++) {
    //"<span>L"+json.products[i].sizes[0]+"</span>";
	//$(catalogo).find(".btn-tam").append("<span>L"+json.products[i].sizes[0].size+"</span>");
	//console.log("asdf " + $(catalogo).find(".btn-tam").text() );
//}

			}// end -for

		},
		error: function(data){
			console.log("Error " + JSON.stringify(data));	
		}
		//complete: function(data){
			//console.log("complete " + JSON.stringify(data));
		//}

	});// end - ajax


}//end - listarProdutos