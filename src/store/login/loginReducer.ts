import { createReducer } from "typesafe-actions";
import { UserData } from './loginType';
import { RequestStatus } from "common/types";
import { login } from "./loginAction";

type State = {
  data: UserData | null,
  status: RequestStatus
}

const initialState: State = {
  data: null,
  status: RequestStatus.IDLE,
}

const loginReducer = createReducer(initialState)
  .handleAction(login.request, (state) => ({
    ...state, status: RequestStatus.FETCH
  }))
  .handleAction(login.success, (state, action) => ({
    ...state, data: action.payload, status: RequestStatus.SUCCESS
  }))
  .handleAction(login.failure, (state) => ({
    ...state, data: null, status: RequestStatus.FAILURE
  }))


export default loginReducer;