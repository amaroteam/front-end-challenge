$(document).ready(function() {

	//Loader de carregamento
	startLoader();
	stopLoader();


	animacaoCarrinho();

});

//Function que desativa o menu
function animacaoCarrinho(){

	$(".navbar-icon-cart").click(function(event) {

		$(".carrinho").animate({
			"right": "0px"
		}, "fast", function(){
			$(".backNav").fadeIn(500);
		});

	});//end - navbar-icon-cart

	$(".carrinho > h4, .backNav").click(function(event) {

		$(".carrinho").animate({
			"right": "-80%"
		}, "fast", function(){
		 $(".backNav").fadeOut(200);
		});

	});

}//end - function animacao carrinho

//Loader da página
function startLoader(){

  var divLoader = $("<div class='loader'></div>").html("<div class='loaderContent'></div>");
  $("body").append(divLoader).fadeIn(900);

}//end - startLoader

//Function que interrompe o loader
function stopLoader(){

	window.setTimeout(function() {

  		$(".loader").fadeOut('slow');

	}, 1000);

}//end - stopLoader
