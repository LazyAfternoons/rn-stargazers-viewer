import {StargazersAction} from './../../types/actions';
import {expectSaga, testSaga} from 'redux-saga-test-plan';
import {mockedUser} from '../../api/__mocks__/github';
import {fetchStargazers, initStargazers} from '../sagas';
import {
  beforeOverStateMock,
  initMock,
  initStateMock,
} from '../__mock__/statesStargazers';
import {getStargazers} from '../../api/github';
import * as matchers from 'redux-saga-test-plan/matchers';
import {throwError} from 'redux-saga-test-plan/providers';

describe('StargazersSagas', () => {
  describe('the initStargazers saga', () => {
    it('should yield fetchStargazers', () => {
      testSaga(initStargazers).next().call(fetchStargazers).next().isDone();
    });
  });

  describe('the fetchStargazers saga', () => {
    describe('should call getStargazers', () => {
      it('and if the response lenght is 0 and page is 1 then dispatch EMPTY action', () => {
        return expectSaga(fetchStargazers)
          .withState({stargazers: initStateMock})
          .provide([[matchers.call.fn(getStargazers), []]])
          .put({
            type: StargazersAction.EMPTY,
          })
          .run();
      });

      it('and if the response lenght is greater than 0 then dispatch SUCCESS action', () => {
        return expectSaga(fetchStargazers)
          .withState({stargazers: initStateMock})
          .provide([[matchers.call.fn(getStargazers), [mockedUser]]])
          .put({
            type: StargazersAction.SUCCESS,
            payload: {
              list: [mockedUser],
              page: initMock.page + 1,
            },
          })
          .run();
      });

      it('and if the response lenght is greater than 0 then dispatch OVER action', () => {
        return expectSaga(fetchStargazers)
          .withState({stargazers: beforeOverStateMock})
          .provide([[matchers.call.fn(getStargazers), []]])
          .put({
            type: StargazersAction.OVER,
          })
          .run();
      });

      it('and if the response api throws error then dispatch FAIL action', () => {
        const errorMessage = 'some error';
        const error = new Error(errorMessage);
        return expectSaga(fetchStargazers)
          .withState({stargazers: initStateMock})
          .provide([[matchers.call.fn(getStargazers), throwError(error)]])
          .put({
            type: StargazersAction.FAIL,
            payload: {
              error: {
                code: undefined, //code is not defined for Error, only for AxiosError
                message: errorMessage,
              },
            },
          })
          .run();
      });
    });
  });
});
