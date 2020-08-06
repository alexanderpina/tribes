import * as actions from './topicsAction';
import topicsReducer from './topicsReducer';
import topicsSaga from './topicsSaga';

export {
  actions,
  topicsReducer as reducer,
  topicsSaga as saga
}