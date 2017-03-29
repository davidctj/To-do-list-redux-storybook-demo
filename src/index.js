import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import reducer from './reducers'

// create redux store
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //redux dev tool
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
