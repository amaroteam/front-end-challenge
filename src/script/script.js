var produtos = null,
	quantidadeItens = 0,
	indice = 0,
	screen = 30,
	itensCarrinho = [],
	total = 0,
	carrinhoShow = false,
	filtroPromo = false;

window.onload = function(){
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(xhr.readyState == 4 && xhr.status == 200){
			produtos = JSON.parse(xhr.response);
			quantidadeItens = produtos.products.length;
		for(indice;indice < 4;indice++){
			montarCatalogo(produtos,indice);
		}
	}

	if(xhr.readyState == 4 && xhr.status != 200){
		var aviso = document.createElement('span');
		aviso.style.color = "#ccc";
		aviso.style.fontSize = "2em";
		aviso.style.fontFamily = "Gotham"; 
		aviso.style.display = "block";
		aviso.textContent = "Nenhum produto encontrado";
		document.getElementById('catalogo').appendChild(aviso);
		document.getElementsByTagName('footer')[0].style.bottom = "0";
	}
};
xhr.open('GET','service/products.json');
xhr.send();
}

if(document.addEventListener){
	document.addEventListener("scroll",carregarPagina);
}
else{
	document.attachEvent("scroll",function(e){
	console.log(e);
	carregarPagina()});
}

function carregarPagina(){
	if(indice < quantidadeItens){
		if(window.scrollY >= screen){
			screen = screen * 2;
			var max = indice + 4;
			for(indice;indice < (max);indice++){
				if(indice < quantidadeItens)
					montarCatalogo(produtos,indice);
				else {
					this.removeEventListener('scroll',carregarPagina);
					break; 
			}
			}
		}
	}
}

function montarCatalogo(produtos,indice){
	var div = document.createElement('div');
			div.dataset.promo = produtos.products[indice].on_sale;
				var promocional = filtroPromo && div.dataset.promo == 'false';
				div.className = "item-container";
				if(promocional)
					div.className += " is-removed";
				var img = document.createElement('img');
				img.setAttribute('src',produtos.products[indice].image);
				img.setAttribute('alt','Imagem de ' + produtos.products[indice].name);
				img.setAttribute("ondragstart",'arrastarAoCarrinho(event);');
				img.setAttribute("ondragend",'pararArrastar();');
				img.setAttribute('draggable','true');
				img.setAttribute('name',produtos.products[indice].name);
				img.dataset.indice = indice;
				img.title = produtos.products[indice].name;
				img.className  = "item";
				var titulo = document.createElement('span');
				titulo.textContent = produtos.products[indice].name;
				titulo.className = "titulo-produto";
				var precos = document.createElement('div');
				precos.className = "precos";
				var precoRegular = document.createElement('span');
				precoRegular.textContent = produtos.products[indice].regular_price;
				var porcentagem = produtos.products[indice].discount_percentage;
				precos.appendChild(precoRegular);
				if(porcentagem != ""){
					precoRegular.className = "valor-promo";
					var precoAtual = document.createElement('span');
					precoAtual.textContent = produtos.products[indice].actual_price;
					precoAtual.className = "valor-atual";
					precoAtual.setAttribute('data-parcela',produtos.products[indice].installments);
					var desconto = document.createElement('span');
					desconto.textContent = porcentagem;
					desconto.className = "desconto";
					precos.appendChild(precoAtual);
					precos.appendChild(desconto);
				}
				else{
					precoRegular.className = "valor-atual";
					precoRegular.setAttribute('data-parcela',produtos.products[indice].installments);
				}
				var sizes = document.createElement('div');
				sizes.className = "sizes";
				var lista = document.createElement('ul');
				var transacao = document.createElement('div');
				transacao.id = "transacao"; 
				var carrinho = document.createElement('button');
				carrinho.textContent = "Adicionar ao carrinho";
				carrinho.setAttribute('onclick','adicionarAoCarrinho(this);');
				carrinho.dataset.indice = indice; 
				var comprar = document.createElement('button');
				comprar.textContent = "Comprar";
				transacao.appendChild(carrinho);
				transacao.appendChild(comprar);
				div.appendChild(img);
				div.appendChild(titulo);
				div.appendChild(precos);
				for(t in produtos.products[indice].sizes){
					var tamanho = document.createElement('li');
					tamanho.textContent = produtos.products[indice].sizes[t].size;
					if(produtos.products[indice].sizes[t].available == false)
						tamanho.className = "nDisponivel";
					lista.appendChild(tamanho);
				}
				div.appendChild(sizes);
				div.appendChild(transacao);
				sizes.appendChild(lista);
				document.getElementById('catalogo').appendChild(div);
			
}

function filtrarPorPromocao(e){
	filtroPromo = e.checked;
	var itens = document.getElementsByClassName('item-container');
	for(var indice = 0;indice < itens.length;indice++){
		if(filtroPromo && itens[indice].dataset.promo != null && itens[indice].dataset.promo == "false")
			alternarClasse(itens[indice],'is-removed',true);
		else 
			alternarClasse(itens[indice],'is-removed',false);
		}
}	

function arrastarAoCarrinho(ev){
	ev.dataTransfer.setData("indice",ev.target.dataset.indice);
	alternarClasse(document.getElementById('lista-carrinho'),'is-hidden',false);
	carrinhoShow = true;
}

function pararArrastar(){
	alternarClasse(document.getElementById('lista-carrinho'),'is-hidden',true);
	carrinhoShow = false;
	document.getElementById('carrinho').getElementsByTagName('button')[0].innerHTML = "Acessar carrinho";
}

function adicionarAoCarrinho(e){
	var item = produtos.products[e.dataset.indice];
	adicionar(item);
	alternarClasse(document.getElementById('lista-carrinho'),'is-hidden',false)
	setTimeout(function(){alternarClasse(document.getElementById('lista-carrinho'),'is-hidden',true)},5000);
	document.getElementById('carrinho').getElementsByTagName('button')[0].innerHTML = "Acessar carrinho";
	carrinhoShow = false;
}

function dropItem(e){
	e.preventDefault();
	var produto = produtos.products[parseInt(e.dataTransfer.getData("indice"))];
	adicionar(produto);
}

function removerItem(e){
var item = e.dataset.item;
var indice = contemItemNoCarrinho(item,itensCarrinho);
itensCarrinho[indice].quantidade--;
item = itensCarrinho[indice];
	if(item.quantidade > 0){
		document.getElementById(item.name).childNodes[0].textContent = item.quantidade + " " + item.name + "......." + item.actual_price;
	}
	
	else{	
		var elemento = document.getElementById(item.name);
		elemento.parentNode.removeChild(elemento);
		itensCarrinho[indice] = null;
		itensCarrinho.sort();
		itensCarrinho.pop();
	}
atualizarValor(itensCarrinho);
}

function adicionar(item){
	var indice = contemItemNoCarrinho(item.name,itensCarrinho);
	if(indice == -1){	
	item.quantidade = 0;	
				var linha = document.createElement('li');
					linha.id = item.name;
					linha.dataset.src = item.image;
					linha.addEventListener('mouseover',function(){
						var miniatura = document.getElementById('imagemCarrinho'); 
						 miniatura.src = this.dataset.src;
						 miniatura.title = this.id;
						 miniatura.setAttribute('alt','Imagem miniatura mostrada no carrinho do ' + linha.id);
						alternarClasse(document.getElementById('imagemCarrinho'),'is-hidden',false);
					});
					var btnRemove = document.createElement('button');
					btnRemove.dataset.item = linha.id;
					btnRemove.textContent = "Remove";
					btnRemove.className = "btn-remove";
					btnRemove.setAttribute('onclick','removerItem(this);');
					linha.appendChild(document.createTextNode(''));
					linha.appendChild(btnRemove);
					document.getElementById('item-carrinho').appendChild(linha);
					itensCarrinho.push(item);
					item.quantidade++; 	
			}
			else{
				item = itensCarrinho[indice];
				item.quantidade++;
				itensCarrinho[indice] = item;
			}
			console.log(item.quantidade);
		var texto = document.createTextNode(item.quantidade + " " + item.name + "......." + item.actual_price);
			document.getElementById(item.name).childNodes[0].textContent = item.quantidade + " " + item.name + "......." + item.actual_price;
		atualizarValor(itensCarrinho);
}


function contemItemNoCarrinho(item,itensCarrinho){
	for(indice in itensCarrinho){
		if(itensCarrinho[indice].name == item) 
			return indice;
	}
		return -1;
}

function atualizarValor(itens){
	total = 0;
	for(item in itens){
			console.log(itens[item]);
			total += (parseFloat(itens[item].actual_price.replace('R$ ','').replace(',','.')) * itens[item].quantidade);
	}
	document.getElementById('valorTotal').innerHTML = parseFloat(total).toFixed(2).replace('.',',');
}

function hoverContainer(e){
	e.preventDefault();
}

function alternarClasse(elemento,nomeClasse,adicionar){
	if(!adicionar)
		elemento.className = elemento.className.replace(nomeClasse,'');
	else
		elemento.className += ' ' + nomeClasse;    
}

function acessarCarrinho(){
	alternarClasse(document.getElementById('lista-carrinho'),'is-hidden',carrinhoShow);
	carrinhoShow = !carrinhoShow;
	if(carrinhoShow){
		document.getElementById('carrinho').getElementsByTagName('button')[0].innerHTML = "Esconder carrinho";
	}	
	else
		document.getElementById('carrinho').getElementsByTagName('button')[0].innerHTML = "Acessar carrinho";
}

