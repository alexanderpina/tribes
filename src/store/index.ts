import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createMiddlewares, { sagaMiddleware } from './middlewares';
import RootSaga from './rootSaga';
import rootReducer from './rootReducer';
import { history as reducerHistory } from 'reducers';

export const history = reducerHistory;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...createMiddlewares(history))),
);

sagaMiddleware.run(RootSaga);
