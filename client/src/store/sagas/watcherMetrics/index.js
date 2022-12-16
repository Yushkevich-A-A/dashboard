import { getData } from 'api';
import { put, all, takeLeading, fork, call, select } from 'redux-saga/effects';

function* workerSetMetrics() {
  const state = yield select( state => state.serviceMetrics);
  const metrics = yield call(getData, 'metrics?', { dateTimeRequest: state.timeData, lastRowId: 0 });
  yield put({ type:'SET_METRICS', payload: { metrics }});
}

export default function* watcherMetrics() {
  yield call(workerSetMetrics);
}