import React from 'react';
import Cart from './containers/Cart';
import Header from './containers/Header';
import './index.css';

const App = () => {
    return (
        <div className="mdl-layout mdl-js-layout mdl-color--grey-100">
            <Header />
            <div className="cart-content">
                <Cart />
            </div>
        </div>
    );
}

export default App;
