import { actions as loginActions } from './login';
import { actions as registerActions } from './register';
import { actions as topicsActions } from './topics';

export default {
  login: loginActions,
  topics: topicsActions,
  register: registerActions
}