import { createAsyncAction } from "typesafe-actions";
import { LoginPayload, UserData } from './loginType';

export const login = createAsyncAction(
  'LOGIN_REQUEST', 
  'LOGIN_SUCCESS', 
  'LOGIN_FAILURE'
)<LoginPayload, UserData, undefined>()