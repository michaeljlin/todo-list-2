import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

import App from './components/app';
import promise from 'redux-promise';

ReactDOM.render(
    <Provider store={createStore(rootReducer, {}, applyMiddleware(promise))}>
        <App />
    </Provider>,
    document.getElementById('root')
);
