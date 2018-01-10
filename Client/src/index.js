import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// redux
import { createStore, applyMiddleware } from 'redux';

// react-redux
import { Provider } from 'react-redux';
// import {createLogger} from 'redux-logger'
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import Header from './containers/header';

import reducers from './reducers';

import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(
	createStore
);
const store = createStoreWithMiddleware(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const token = localStorage.getItem('token');

if (token) {
	store.dispatch({ type: AUTH_USER });
}

render(
	<Provider store={store}>
		<Router>
			<Header />
		</Router>
	</Provider>,
	document.getElementById('root')
);
