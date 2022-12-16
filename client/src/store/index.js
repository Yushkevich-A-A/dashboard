
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import serviceProject from 'store/project';
import serviceFilter from 'store/filter';
import serviceMetrics from 'store/metrics';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from 'store/sagas';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  serviceProject,
  serviceFilter,
  serviceMetrics,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
    ),
);

sagaMiddleware.run(rootSaga);

export default store;