import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './Produtos/Produtos.js';
// Tap plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render((
    <App />
), document.getElementById('app'));