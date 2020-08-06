import { createReducer } from "typesafe-actions";
import { RequestStatus } from "common/types";
import { register } from "./registerAction";

type State = {
  status: RequestStatus
}

const initialState: State = {
  status: RequestStatus.IDLE,
}

const registerReducer = createReducer(initialState)
  .handleAction(register.request, (state) => ({
    ...state, status: RequestStatus.FETCH
  }))
  .handleAction(register.success, (state, action) => ({
    ...state, status: RequestStatus.SUCCESS
  }))
  .handleAction(register.failure, (state) => ({
    ...state, status: RequestStatus.FAILURE
  }))

export default registerReducer;