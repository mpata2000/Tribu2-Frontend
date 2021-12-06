import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducers from 'redux_folder/reducers';
import rootSaga from 'redux_folder/sagas';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
  reducers,
  /* preloadedState, */
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware,
      loggerMiddleware,
    ),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
