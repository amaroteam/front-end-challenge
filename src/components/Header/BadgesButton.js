import React, { Component } from 'react'
import PropTypes from 'prop-types';

class BadgesButton extends Component {
    render() {
        const { quantity } = this.props;
        return (
            quantity > 0 ?
                <div className="mdl-layout__drawer-button">
                    <div className="material-icons mdl-badge mdl-badge--overlap" data-badge={ quantity }>shopping_cart</div>
                </div>
            : 
                <div className="mdl-layout__drawer-button">
                    <i className="material-icons">shopping_cart</i>
                </div>
              
        );
    }
}

BadgesButton.propTypes = {
    quantity: PropTypes.number
}


export default BadgesButton;
