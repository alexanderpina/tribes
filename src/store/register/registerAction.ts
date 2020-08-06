import { createAsyncAction } from "typesafe-actions";
import { RegisterPayload } from './registerType';

export const register = createAsyncAction(
  'REGISTER_REQUEST', 
  'REGISTER_SUCCESS', 
  'REGISTER_FAILURE'
)<RegisterPayload, undefined, undefined>()