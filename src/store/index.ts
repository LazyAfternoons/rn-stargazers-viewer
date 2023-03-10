import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import {rootReducer} from './reducers';
import {configureStore} from '@reduxjs/toolkit';

/**
 * Reference to the Saga middleware connected to the Redux Store
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * Refenrece to the middlewares array.
 */
const middlewares = [sagaMiddleware];

/**
 * If in DEV env push the debugger middleware
 */
if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

/**
 * Configures the store by passing a middleware and the root reducer.
 */
const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: {warnAfter: 128},
    }).concat(middlewares),
  reducer: rootReducer,
});

/**
 * Runs the middleware with {@link rootSaga} as Saga.
 */
sagaMiddleware.run(rootSaga);

export {store};
