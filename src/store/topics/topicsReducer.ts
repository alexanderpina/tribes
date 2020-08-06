import { createReducer } from "typesafe-actions";
import { TopicsData } from './topicsType';
import { RequestStatus } from "common/types";
import { topics } from "./topicsAction";

type State = {
  data: TopicsData | null,
  status: RequestStatus
}

const initialState: State = {
  data: null,
  status: RequestStatus.IDLE,
}

const topicsReducer = createReducer(initialState)
  .handleAction(topics.request, (state) => ({
    ...state, status: RequestStatus.FETCH
  }))
  .handleAction(topics.success, (state, action) => ({
    ...state, data: action.payload, status: RequestStatus.SUCCESS
  }))
  .handleAction(topics.failure, (state) => ({
    ...state, data: null, status: RequestStatus.FAILURE
  }))


export default topicsReducer;