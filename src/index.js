import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import CustomProvider from './provider/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<CustomProvider>
    <App />
</CustomProvider>, 

document.getElementById('root'));

serviceWorker.unregister();
