function listarProdutos(){$.ajax({type:"GET",url:"db/products.json",dataType:"json",contentType:"application/json",success:function(s){var a=JSON.stringify(s);a=JSON.parse(a);for(var o=a.products.length,r=0;r<o;r++){var n="<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'><div class='thumbnail'><img class='produto-imagem' src='"+a.products[r].image+"' alt='"+a.products[r].name+"'><div class='caption'><h5><a class='produto-nome' href='#''>"+a.products[r].name+"</a></h5><h5 class='produto-preco'>Pre "+a.products[r].regular_price+"</h5><h5 class='produto-desconto'>Des "+a.products[r].discount_percentage+"</h5><h5 class='produto-preco-desconto'>A "+a.products[r].actual_price+"</h5><h5 class='produto-parcelas'>P"+a.products[r].installments+"</h5></div><a class='btn btn-primary btn-comprar' href='#''>Comprar</a><div class='ratings'><p>Tamanhos</p><p class='btn-tam'><span>PP</span><span>P</span><span>M</span><span>G</span><span>GG</span></p></div><!-- end ratings --></div><!-- end thumbnail --></div><!-- end col-->";$("#catalogo-produtos").append(n)}},error:function(s){console.log("Error "+JSON.stringify(s))}})}$(document).ready(function(){listarProdutos()});