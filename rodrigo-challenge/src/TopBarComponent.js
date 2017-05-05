import React, { Component } from 'react';
import './App.css';

class TopBarComponent extends Component {
  render() {
    return (
		<div className="TopBar">
			<div className="TopBar-left">
				<p>Conheça nosso App</p>
			</div>
			<div className="TopBar-center">
				<p>Frete Grátis</p>
				<p>Entrega Expressa</p>
				<p>Troca Grátis</p>
			</div>
			<div className="TopBar-right">
				<p>(11) 3230-4500</p>
				<p>Chat</p>
			</div>			
		</div>
    );
  }
}

export default TopBarComponent;