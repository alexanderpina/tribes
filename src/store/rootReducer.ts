import { combineReducers } from 'redux';
import { reducers } from 'reducers';
import { History, createBrowserHistory } from 'history';

export const history: History = createBrowserHistory(); 
const rootReducer = combineReducers(reducers);

export default rootReducer;