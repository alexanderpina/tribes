import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import Logger from 'redux-logger';
import CreateSagaMiddleware from 'redux-saga'; 

export const sagaMiddleware = CreateSagaMiddleware();
export default (history: History) => [ 
  ...[process.env.NODE_ENV !== 'production' ? Logger : undefined] as any, 
  routerMiddleware(history), 
  sagaMiddleware, 
].filter(Boolean);
