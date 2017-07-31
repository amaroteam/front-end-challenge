import React from 'react';
import Header from './containers/Header';
import BadgesButton from './containers/BadgesButton';
import CatalogList from './containers/CatalogList';
import Cart from './containers/Cart';

const App = () => {
    return (
        <div className="mdl-layout mdl-js-layout mdl-color--grey-100">
            <Header />
            <BadgesButton />
            <div className="mdl-layout__drawer">
                <div className="mld-grid">
                    <Cart />
                </div>
            </div>
            <main className="mdl-layout__content">
                <CatalogList />
            </main>
        </div>        
    );
}

export default App;
import './index.css';