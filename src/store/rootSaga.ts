import { all } from 'redux-saga/effects';
import { saga as loginSaga } from './login';
import { saga as registerSaga } from './register';
import { saga as topicsSaga } from './topics';

export default function* rootSaga() {
  yield all([
    ...loginSaga,
    ...topicsSaga,
    ...registerSaga,
  ]); 
}