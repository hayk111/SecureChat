import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

export default store;

//registerServiceWorker();
