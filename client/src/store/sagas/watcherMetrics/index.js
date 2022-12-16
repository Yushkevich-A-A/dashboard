import { getData } from 'api';
import { addMinutes, format } from 'date-fns';
import { put, all, takeLeading, fork, call, select } from 'redux-saga/effects';

function* workerSetMetrics() {
  const state = yield select( state => state.serviceMetrics);

  const lastMetrics = state.metrics[state.metrics.length - 1];
  const lastIndexMetrix = lastMetrics ? lastMetrics.id : 0;
  const timeRequest = state.datetime 
                            ? format(addMinutes(state.datetime, 1), 'dd-MM-yyyy mm:ss') 
                            : '01-03-2020 00:00';
  const metrics = yield call(getData, 'metrics?', { 
    dateTimeRequest: timeRequest, 
    lastRowId: lastIndexMetrix,
  });
  yield put({ type:'SET_METRICS', payload: { metrics }});
}

export default function* watcherMetrics() {
  yield all([
    takeLeading('REQUEST_METRICS', workerSetMetrics),
  ])
}