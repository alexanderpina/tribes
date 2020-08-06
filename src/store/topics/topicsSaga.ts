import { topics, topicsRemove } from "./topicsAction";
import { call, put, takeEvery } from "redux-saga/effects";
import { getTopics, removeTopicCategory } from "./topicsService";
import { TopicsData } from "./topicsType";
import { RequestData } from "common/types";

function* topicsSaga() {
  try {
    const { data }: RequestData<TopicsData> = (
      yield call(getTopics)
    ) as RequestData<TopicsData>;
    yield put(topics.success(data));
  } catch {
    yield put(topics.failure());
  }
}

function* topicsRemoveSaga({ payload }: ReturnType<typeof topicsRemove.request>) {
  try {
    yield call(removeTopicCategory, payload.id)
    yield put(topicsRemove.success(payload));
  } catch {
    yield put(topics.failure());
  }
}

export default [
  takeEvery(topics.request, topicsSaga),
  takeEvery(topicsRemove.request, topicsRemoveSaga)
];