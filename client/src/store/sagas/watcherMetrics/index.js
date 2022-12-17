import { getData } from 'api';
import { addMinutes, format } from 'date-fns';
import { put, all, takeLeading, call, select } from 'redux-saga/effects';

function* workerSetMetrics() {
  const state = yield select( state => state.serviceMetrics);

  const lastMetrics = state.metrics[state.metrics.length - 1];
  // этоти переменные объявлены изменяемыми, чтобы можно было зациклить запросы метрик
  let lastIndexMetrix = lastMetrics ? lastMetrics.id : 0;
  lastIndexMetrix = ( lastIndexMetrix === 176 ) ? 0 : lastIndexMetrix;

  let timeRequest = state.datetime 
                            ? format(addMinutes(state.datetime, 1), 'dd-MM-yyyy mm:ss') 
                            : '01-03-2020 00:00';
  timeRequest = (timeRequest === '01-03-2020 11:00') ? '01-03-2020 00:00' : timeRequest;

  const metrics = yield call(getData, 'metrics?', { 
    dateTimeRequest: timeRequest, 
    lastRowId: lastIndexMetrix,
  });
  if (metrics.length === 0 ) {
    return ;
  }
  yield put({ type:'SET_METRICS', payload: { metrics }});
}

export default function* watcherMetrics() {
  yield all([
    takeLeading('REQUEST_METRICS', workerSetMetrics),
  ])
}