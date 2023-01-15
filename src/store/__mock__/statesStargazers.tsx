import {
  EmptyStargazers,
  FailureStargazers,
  InitStargazers,
  OverStargazers,
  StargazersAction,
  StateStargazers,
  SuccessStargazers,
} from '../../types/actions';

export const initMock: InitStargazers['payload'] = {
  owner: 'test',
  repo: 'test',
  page: 1,
  perPage: 30,
  withTimestamp: false,
};

export const successMock: SuccessStargazers = {
  type: StargazersAction.SUCCESS,
  payload: {
    list: [1, 2, 3, 4, 5],
    page: 2,
  },
};

export const failMock: FailureStargazers = {
  type: StargazersAction.FAIL,
  payload: {
    error: {code: '400', message: 'not found'},
  },
};

export const overMock: OverStargazers = {
  type: StargazersAction.OVER,
  payload: {},
};

export const overMockRes: Partial<StateStargazers> = {
  isOver: true,
  loading: false,
  nextPageLoading: false,
};

export const emptyMock: EmptyStargazers = {
  type: StargazersAction.EMPTY,
  payload: {},
};

export const emptyMockRes: Partial<StateStargazers> = {
  list: [],
  loading: false,
  nextPageLoading: false,
};
