import { call, all, spawn } from 'redux-saga/effects';
import loadBasicData from 'store/sagas/loadBasicData';
import watcherFilter from 'store/sagas/watcherFilter';
// import whatchSelectedProject from 'store/sagas/watchSelectedProject';



export default function* rootSaga() {
  const sagas = [
    loadBasicData,
    watcherFilter,
    // whatchSelectedProject,
  ]

  const retrySagas = yield sagas.map( (saga) => {
    return spawn( function* () {
      while(true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.warn(e);
        }
      }
    })
  })

  yield all(retrySagas);
  
}