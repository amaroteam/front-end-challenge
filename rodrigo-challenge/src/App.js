import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import TopBarComponent from './TopBarComponent';
import ProductComponent from './ProductComponent';
import products from './products.json';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
			listOfProducts: {},
			chart: [],
			sale: false,
        };
    }	
	
	toggleSale() {
		document.getElementById('sale-button').classList.toggle('sale-active');
		this.setState({
			sale: !this.state.sale
		})
	}	
	
	addProduct(productId, productName, productImage, productPrice, productSize, productQuantity) {
		
		var newChart = this.state.chart.slice();
		var nonExistingProduct = true;
		for (var i=0; i<newChart.length;i++) {
			if (newChart[i][0]+newChart[i][4] === productId+productSize) {
				newChart[i][5]++;
				nonExistingProduct = false;
			}
		}		
		
		if (nonExistingProduct) newChart.push([productId, productName, productImage, productPrice, productSize, productQuantity]);
		
		var element = ReactDOM.findDOMNode(this.refs[productId]);
		
		element.style.visibility  = 'hidden';
		setTimeout(() => {element.style.visibility  = 'visible';},300);
		
		this.setState({
			chart: newChart
		})
	}

	removeProduct(productId) {
		var newChart = this.state.chart.slice();
		var index;
		for (var i=0; i<newChart.length;i++) {
			if (newChart[i][0]+newChart[i][4] === productId) {
				index = i;
			}
		}
		newChart.splice(index,1);
		this.setState({
			chart: newChart
		})		
	
	}
	
	addQuantity(productId) {
		var newChart = this.state.chart.slice();
		var index;
		for (var i=0; i<newChart.length;i++) {
			if (newChart[i][0]+newChart[i][4] === productId) {
				index = i;
			}
		}
		newChart[index][5]++;
		this.setState({
			chart: newChart
		})		
			
	}
	
	subQuantity(productId) {
		var newChart = this.state.chart.slice();
		var index;
		for (var i=0; i<newChart.length;i++) {
			if (newChart[i][0]+newChart[i][4] === productId) {
				index = i;
			}
		}
		newChart[index][5]--;
		this.setState({
			chart: newChart
		})		
			
	}	
	
	renderChart() {
		
		let chartProducts = this.state.chart;
		if (this.state.chart.length === 0) {
			return (
				<div className="row">
					<div className="col-12 sacola-vazia">
						<p>Sua sacola está vazia</p>
					</div>
				</div>  	
			);			
		} else {
		return chartProducts.map((product) => {
			var productId = product[0];
			var productImage = product[2];
			var productName = product[1];
			var productQuantity = product[5];
			var productPrice = product[3];
			var productSize = product[4];	
			return (
				<div key={productId+productSize} className="row">
					<div className="col-2 sacola-item">
						<img src={productImage} alt={productName} className="img-fluid"/>
					</div>
					<div className="col-6 sacola-item">
						<p>{productName}</p>
						<p><span className="sub-quantity" onClick={() => this.subQuantity(productId+productSize)}>-</span><span className="quantity"> {productQuantity} </span><span className="add-quantity" onClick={() => this.addQuantity(productId+productSize)}>+</span></p>
						<p>tamanho: {productSize}</p>
					</div>
					<div className="col-2 sacola-item"><p>{productPrice}</p></div>
					<div className="col-1 sacola-item"><p className="close" onClick={() => this.removeProduct(productId+productSize)}>x</p></div>
				</div>  	
			);
		});					
		}
	}
	
	renderTotalPrice() {
		let chartProducts = this.state.chart;
		let total = 0;
		let totalString = "";
		if (this.state.chart.length === 0) {
			return (
				<p>R$ 0,00</p>  	
			);			
		} else {
		chartProducts.map((product) => {
			var productPrice = product[3];
			productPrice = productPrice.slice(productPrice.indexOf(' '),productPrice.length);
			var subTotal = parseFloat(productPrice.replace(",", "."));
			subTotal *= product[5];
			total += subTotal;			
		});	
			total = total.toFixed(2)
			totalString = total.toString();
			totalString = totalString.replace(".", ",");
			return (
				<p>R$ {totalString}</p>  	
			);		
		}		
		
	}
	
	renderProducts(){
		
		let filteredProducts = products.products;
		filteredProducts = filteredProducts.filter(product => product.image !== "");
		if (this.state.sale) filteredProducts = filteredProducts.filter(product => product.on_sale === true);
	
		return filteredProducts.map((product) => {
			var productId = product.code_color;
			var  productName = product.name;
			var productImage = product.image;
			var productPrice = product.actual_price;
			var productQuantity = 1;	
			return (
			<div key={product.code_color} className="mouse-over col-6 col-sm-4 col-md-3">
				<div className="product-cover" ref={productId}>
					{
						product.sizes.length > 1 ? <p className="product-cover-title">Escolha o tamanho e adicione à sacola de compras:</p> : ''
					}
					{

						product.sizes.map((item) => {
							if (item.size === "U") return (<p className="product-cover-clickable" key={item.size} onClick={() => this.addProduct(productId, productName, productImage, productPrice, item.size, productQuantity)}>Adicione à sacola de compras</p>);
							if (item.available) return(<p className="product-cover-clickable" key={item.size} onClick={() => this.addProduct(productId, productName, productImage, productPrice, item.size, productQuantity)}>{item.size}</p>);
						})
					}
				</div>
				<ProductComponent
					key={product.code_color}
					name={product.name}
					image={product.image}
					price={product.regular_price}
					promoStatus={product.on_sale}
					promoPrice={product.actual_price}
					sizes={product.sizes}
					discount={product.discount_percentage}
				/>
			</div>
			);
		});
	}
	
	render() {
		return (
			<div className="App container-fluid">
				<TopBarComponent />
				<div className="App-header row">
					<div className="offset-2 col-8">
						<img src="../logo-amaro.png" className="App-logo" alt="Amaro" />
						<h2>best sellers</h2>
					</div>
					<div className="col-2 sacola-wrapper">
						<div className="sacola container-fluid">
							<h4>sua sacola</h4>
							{this.renderChart()}
							<div className="row price-row">
								<div className="offset-4 col-2">
									<p>Total:</p>
								</div>
								<div className="offset-1 col-5">
									{this.renderTotalPrice()}
								</div>								
							</div>
						</div>
						<div className="sacola-icone-wrapper">
							<img src="../bag.png" className="sacola-icone img-fluid" alt="sacola" />
							<p className="sacola-numero">{this.state.chart.length}</p>
						</div>
					</div>
				</div>
				

				
				<div className="container-fluid">
					<div className="row no-gutters">
						<div className="col-12">
							<p className="sale" id="sale-button" onClick={() => this.toggleSale()}><span>Veja</span> apenas os itens em promoção!</p>
						</div>
					</div>
					<div className="row no-gutters">
						{this.renderProducts()}
					</div>
				</div>
		  </div>
		);
	}
}

export default App;
