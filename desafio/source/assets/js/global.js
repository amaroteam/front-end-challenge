$(document).ready(function() {

	//Loader de carregamento	
	/*startLoader();
	window.setTimeout(function() {
      stopLoader();
    }, 1500);*/


/**/
	$(".navbar-icon-cart").click(function(event) {

		$(".carrinho").addClass('active');
        $(".backNav").show();

        $(".carrinho").animate(0,function(){
            $(".carrinho").css('right', '0px');
            $(".carrinho").fadeIn(2000);
        });

        desativaMenu();

	});//end - navbar-icon-cart



});

//Function que desativa o menu
function desativaMenu(){
    $(".backNav").click(function(event) {

        //$("span.fa").css('right', '15px');
        $(".navbar.active").removeClass('active');

        $(".carrinho").animate(0, function(){
            $(".carrinho").css('right', '-80%');
            $(".backNav").hide();
        });

    });
}

//Loader da página
function startLoader(){
    var divLoader = $("<div class='loader'></div>").html("<div class='loaderContent'></div>");
    $("body").append(divLoader).fadeIn(900);
}

//Function que interrompe o loader
function stopLoader(){
    $(".loader").fadeOut('slow');
}
/*
	$.ajax({
	type: "GET",
	url: "db/products.json",
	dataType: "json",
	contentType: 'application/json',
	success: function(data) {
		var json = JSON.stringify(data);
		json = JSON.parse(json);
		
		//console.log("length -> "+json.products.length);
		
		console.log("IDIDIDI -> "+ json.products[1] );

		console.log("Name -> " + json.products[1].name);
		console.log("style -> " + json.products[1].style);
		console.log("code_color -> " + json.products[1].code_color);
		console.log("color_slug -> " + json.products[1].color_slug);
		console.log("color -> " + json.products[1].color);
		console.log("on_sale -> " + json.products[1].on_sale);
		console.log("regular_price -> " + json.products[1].regular_price);
		console.log("actual_price -> " + json.products[1].actual_price);
		console.log("discount_percentage -> " + json.products[1].discount_percentage);
		console.log("installments -> " + json.products[1].installments);
		console.log("image -> " + json.products[1].image);

		console.log("size available -> " + json.products[1].sizes[0].available);
		console.log("size size -> " + json.products[1].sizes[0].size);
		console.log("size sku -> " + json.products[1].sizes[0].sku);
		console.log("size available -> " + json.products[1].sizes[1].available);
		console.log("size size -> " + json.products[1].sizes[1].size);
		console.log("size sku -> " + json.products[1].sizes[1].sku);
		console.log("size available -> " + json.products[1].sizes[2].available);
		console.log("size size -> " + json.products[1].sizes[2].size);
		console.log("size sku -> " + json.products[1].sizes[2].sku);
		console.log("size available -> " + json.products[1].sizes[3].available);
		console.log("size size -> " + json.products[1].sizes[3].size);
		console.log("size sku -> " + json.products[1].sizes[3].sku);
		console.log("size available -> " + json.products[1].sizes[4].available);
		console.log("size size -> " + json.products[1].sizes[4].size);
		console.log("size sku -> " + json.products[1].sizes[4].sku);
var name = json.products[1].name;
var value = 1;

function setCookie(name, value, duration) {
    var cookie = name + "=" + escape(value) + ((duration) ? "; duration=" + duration.toGMTString() : "");
    document.cookie = cookie;
}
setCookie(name,value);

	},
	error: function(data){
		console.log("Error " + JSON.stringify(data));	
	}
	//complete: function(data){
		//console.log("complete " + JSON.stringify(data));
	//}
});
*/