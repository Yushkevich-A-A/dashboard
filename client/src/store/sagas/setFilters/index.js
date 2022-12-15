import { put, all, takeLeading } from 'redux-saga/effects';

function* workerSetGroup(action) {
  const group = action.payload;
  yield put({ type:'SET_GROUP_FIELD', payload: { group }});
}

function* workerSetNode() {
  const node = action.payload;
  yield put({ type:'SET_NODE_FIELD', payload: { node }});
}


function* workerReset() {
  yield put({ type:'RESET_FILTER_FIELDS'});
}


export default function* setFilter () {
  yield all([
      takeLeading('SET_GROUP', workerSetGroup),
      takeLeading('SET_NODE', workerSetNode),
      takeLeading('RESET_FILTERS', workerReset)
    ])
}