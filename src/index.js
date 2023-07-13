import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "tachyons"; // I added
import reportWebVitals from './Defaults/reportWebVitals';
import CatApp from './Containers/CuteCatPageApp';
import { Provider } from 'react-redux'; //! Libraries to use Redux
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'; //! In Redux we have to create Store, also `applyMiddleware` must be imported so we can use the `createLogger`. `combineReducers` combines all the reducers into a root reducer
import { searchCats, requestCats } from './reducers';
import { createLogger } from 'redux-logger'; //! To use npm redux-logger for debugging. It is a Middleware
import thunkMiddleware from 'redux-thunk'; //! To use redux-thunk

const logger = createLogger();

const rootReducer = combineReducers({ requestCats, searchCats })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store} > {/*//! instead of passing `store` as a props to CatApp we passed it to all the files that are connected to CatApp through `Providr` which is a Redux feature. Look we import it above and we use `connect` to finish this connection */}
      <CatApp />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();