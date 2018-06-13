import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router , Route, Switch, Redirect } from "react-router-dom";
import store from './store';
import App from './containers/App';
import Catalog from './containers/Catalog';
import Cart from './containers/Cart';

const Main = () => (
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Catalog} />
                    <Route path="/cart" component={Cart} />
                    <Redirect from="*" to="/" />
                </Switch>
            </App>
        </Router>
    </Provider>
);

render(
    <Main />,
    document.getElementById('root')
);
