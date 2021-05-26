import { all, call, put, takeEvery } from "redux-saga/effects";
import { getMemberList } from "../utils/libs/api/getMemberList";

const loadSuccess = (data) => ({
  type: "SUCCESS_FETCH",
  loading: false,
  payload: data,
});

const loadFail = (error) => ({
  type: "FAIL_FETCH",
  loading: false,
  error,
});

export function* fetchMemberSaga() {
  try {
    const result = yield call(getMemberList);
    yield put(loadSuccess(result));
  } catch (error) {
    yield put(loadFail(error));
  }
}

export function* requestSaga() {
  yield takeEvery("REQUEST_FETCH", fetchMemberSaga);
}

function* rootSaga() {
  yield all([requestSaga()]);
}

export default rootSaga;
