// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer, { history as historyReducer } from './rootReducer';
// import createMiddlewares, { sagaMiddleware } from './middlewares';
// import rootSaga from './rootSaga';

// export const store = createStore(
//   rootReducer, 
//   composeWithDevTools(
//     applyMiddleware(...createMiddlewares(historyReducer))
//   ), 
// );

// export const history = historyReducer;

// sagaMiddleware.run(rootSaga);

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createMiddlewares, { sagaMiddleware } from './middlewares';
import RootSaga from './rootSaga';
import rootReducer, { history as reducerHistory } from './rootReducer';

export const history = reducerHistory;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...createMiddlewares(history))),
);

sagaMiddleware.run(RootSaga);
