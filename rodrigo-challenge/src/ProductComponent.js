import React, { Component } from 'react';
import './App.css';


class ProductComponent extends Component {
  render() {
	  
	var sizes = this.props.sizes;
	  
    return (
		<div className="product">
			<img src={this.props.image} alt={this.props.name} className="img-fluid"/>
			<p className="product-name">{this.props.name}</p>
			
			{ this.props.price === this.props.promoPrice ?
				<div className="product-price-wrapper">
					<p className="product-only-price">{this.props.price}</p>
				</div> :
				<div className="product-price-wrapper">
					<p className="product-regular-price">{this.props.price}</p>
					<p className="product-discount">({this.props.discount} off)</p>				
					<p className="product-actual-price">{this.props.promoPrice}</p>
				</div>
			}
			<div className="product-size-wrapper">
			{
				sizes.map((item) => {
					if (item.size === "U") return ('');
					if (item.available) {
						return(
							<p key={item.size} className="product-size-available">{item.size}</p>
						);
					} else {
						return(
							<p key={item.size} className="product-size-not-available">{item.size}</p>
						);
					}
				})
			}
			</div>
			
		</div>
    );
  }
}

export default ProductComponent;
