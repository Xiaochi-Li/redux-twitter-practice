import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './core/reducers'

import middleware from './core/middlewares'

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
