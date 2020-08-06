import { connectRouter } from 'connected-react-router';
import { History, createBrowserHistory } from 'history';
import { reducer as loginReducer } from 'store/login';
import { reducer as registerReducer } from 'store/register';
import { reducer as topicsReducer } from 'store/topics';

export const history: History = createBrowserHistory(); 

export const reducers = {
  login: loginReducer,
  register: registerReducer,
  topics: topicsReducer,
  router: connectRouter(history),
}