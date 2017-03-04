$(document).ready(function() {
	
$(".produto-quantidade button").on("click", function(event) {
	
	var quantidade = parseInt($(this).siblings('input').val());

console.log("quantidade " + quantidade );	

	if ($(this).hasClass('qtde-minus')) {
		var valorMenos = quantidade - 1;
		$(this).siblings('input').attr('value', valorMenos);
	};

	if($(this).hasClass('qtde-plus')){
		var valorMais = quantidade + 1;
		$(this).siblings('input').attr('value', valorMais);
	};


/*
if(quantidade > 1 || quantidade < 100){
alert("dentro");
}*/
// else{
//	alert("A quantidade solicitada não está disponível nos nossos estoques!");
//	}

});

});