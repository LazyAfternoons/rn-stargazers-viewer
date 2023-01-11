import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import {rootReducer} from './reducers';
import {configureStore} from '@reduxjs/toolkit';

/**
 * Reference to the Saga middleware connected to the Redux Store
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * Configures the store by passing a middleware and the root reducer.
 */
const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: {warnAfter: 128},
    }).concat(sagaMiddleware),
  reducer: rootReducer,
});

/**
 * Runs the middleware with {@link rootSaga} as Saga.
 */
sagaMiddleware.run(rootSaga);

export {store};
