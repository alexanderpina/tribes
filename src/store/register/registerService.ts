import Axios from 'axios';
import { RegisterPayload } from './registerType';

export const postLogin = (data: RegisterPayload) => 
  Axios.post('http://localhost:3001/users', data);