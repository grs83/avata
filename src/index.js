import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import * as serviceWorker from './serviceWorker';

// Components
import App from './components/App';

render(<Provider store={store}>
            <App />
        </Provider>, document.getElementById('root')
);

// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
