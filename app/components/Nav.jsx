import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top nav-container">
                <div className="container">
                    <div className="navbar">                    
                        <a className="navbar-brand" href="#">Amaro</a>
                        <i className="fa fa-shopping-cart" aria-hidden="true" onClick={() => this.props.onToggleCart()}></i>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;