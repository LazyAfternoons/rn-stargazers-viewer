import {
  overMock,
  overMockRes,
  emptyMock,
  emptyMockRes,
} from './../__mock__/statesStargazers';
import {ActionsStargazers} from '../../types/actions';
import {
  initStargazers,
  makeStargazersRequest,
  resetStargazers,
} from '../actions';
import {initialState, StargazersReducer} from '../reducers';
import {failMock, initMock, successMock} from '../__mock__/statesStargazers';

describe('StargazersReducer', () => {
  it('should start with a valid initial state', () => {
    expect(StargazersReducer(undefined, {} as ActionsStargazers)).toEqual(
      initialState,
    );
  });

  it('should return state changed after INIT', () => {
    //Use the action function
    expect(
      StargazersReducer(undefined, initStargazers(initMock)),
    ).toMatchObject(initMock);
  });

  it('should return state changed after MAKE_REQUEST', () => {
    //Use the action function
    expect(StargazersReducer(undefined, makeStargazersRequest())).toMatchObject(
      {
        nextPageLoading: true,
      },
    );
  });

  it('should return state changed after RESET', () => {
    //Use action function
    expect(StargazersReducer(undefined, resetStargazers())).toEqual(
      initialState,
    );
  });

  it('should return state changed after SUCCESS', () => {
    expect(StargazersReducer(undefined, successMock)).toMatchObject(
      successMock.payload,
    );
  });

  it('should return state changed after FAIL', () => {
    expect(StargazersReducer(undefined, failMock)).toMatchObject(
      failMock.payload,
    );
  });

  it('should return state changed after OVER', () => {
    expect(StargazersReducer(undefined, overMock)).toMatchObject(overMockRes);
  });

  it('should return state changed after EMPTY', () => {
    expect(StargazersReducer(undefined, emptyMock)).toMatchObject(emptyMockRes);
  });
});
