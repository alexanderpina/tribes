import { connectRouter } from 'connected-react-router';
import { History, createBrowserHistory } from 'history';

export const history: History = createBrowserHistory(); 

export const reducers = {
  router: connectRouter(history),
}