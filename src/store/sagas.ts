import {put, takeLatest, all} from '@redux-saga/core/effects';
import {select} from 'redux-saga/effects';
import {getStargazers} from '../api/github';
import {RootState} from '../types/reducers';

/**
 * Worker saga which will be fired on MAKE_REQUEST action.
 * Fetches the list of stargazers based on state and instructs the middleware to dispatch the 'SUCCESS' action if the API call succeded,
 * 'OVER' if the API call returned empty or 'FAIL' in case of error.
 */
function* fetchStargazers() {
  try {
    //Tells the middleware to invoke the provider of the current state
    const state: StateStargazers = yield select(
      (inState: RootState) => inState.stargazers,
    );
    if (
      state.repo &&
      state.owner &&
      state.page &&
      state.perPage &&
      !state.isOver
    ) {
      //Evalutes and yield back to the caller the result of the api call
      const res: User[] | Starred[] = yield getStargazers({
        repo: state.repo,
        owner: state.owner,
        page: state.page,
        perPage: state.perPage,
      });
      if (res.length > 0) {
        //Tells the middleware to dispatch the SUCCESS action to the store
        yield put({
          type: 'SUCCESS',
          payload: {
            list: res,
            page: state.page + 1,
          },
        });
      } else {
        yield put({type: 'OVER'});
      }
    }
  } catch (err: any) {
    yield put({
      //Tells the middleware to dispatch the FAIL action to the store
      type: 'FAIL',
      payload: {
        error: err.message,
      },
    });
  }
}

/**
 * Executes fetchStargazers on each dispatched MAKE_REQUEST action.
 * Always gets the response of the latest request which was fired.
 */
function* fetchStargazersSaga() {
  yield takeLatest('MAKE_REQUEST', fetchStargazers);
}

/**
 * Exports only the rootSaga as entry point to start all Sagas, only one of them in this case though.
 */
export default function* rootSaga() {
  yield all([fetchStargazersSaga()]);
}
