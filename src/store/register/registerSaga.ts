import { register } from "./registerAction";
import { call, put, takeEvery } from "redux-saga/effects";
import { postLogin } from "./registerService";

function* registerSaga({ payload }: ReturnType<typeof register.request>) {
  try {
    yield call(postLogin, { ...payload });
    yield put(register.success());
  } catch {
    yield put(register.failure());
  }
}

export default [takeEvery(register.request, registerSaga)];