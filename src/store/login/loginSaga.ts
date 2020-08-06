import { login } from "./loginAction";
import { call, put, takeEvery } from "redux-saga/effects";
import { getUsers } from "./loginService";
import { UserData, UserDataList } from "./loginType";
import { RequestData } from "common/types";

function* loginSaga({ payload }: ReturnType<typeof login.request>) {
  try {
    const { data }: RequestData<UserDataList> = (
      yield call(getUsers)
    ) as RequestData<UserDataList>;
    
    const user = data.filter((user) => (user.email === payload.email && user.password === payload.password));

    if (!user.length) throw new Error();
    const userData = (user[0] as UserData);

    yield put(login.success(userData));
  } catch {
    yield put(login.failure());
  }
}

export default [takeEvery(login.request, loginSaga)];