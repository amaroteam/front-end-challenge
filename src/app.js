import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { App } from './Produtos/Produtos.js';
// Tap plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render((
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
), document.getElementById('app'));