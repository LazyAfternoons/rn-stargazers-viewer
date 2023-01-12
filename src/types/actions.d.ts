type StateStargazers = {
  owner: string | null;
  repo: string | null;
  loading: boolean;
  nextPageLoading: boolean;
  error: any;
  isOver: boolean;
  page: number;
  perPage: number;
  withTimestamp: boolean;
  list: any[] | null;
};

type StargazersAction =
  | 'INIT'
  | 'MAKE_REQUEST'
  | 'SUCCESS'
  | 'FAIL'
  | 'OVER'
  | 'EMPTY';

type InitStargazers = {
  type: StargazersAction;
  payload: initParamsType;
};

type InitStargazersParams = getStargazersPayload;

type MakeRequestStargazers = {
  type: StargazersAction;
  payload?: {};
};

type SuccessStargazers = {
  type: StargazersAction;
  payload: {
    list: Pick<State, 'list'>;
    page: Pick<State, 'page'>;
  };
};

type FailureStargazers = {
  type: 'FAIL';
  payload: {
    error: Pick<State, 'error'>;
  };
};

type OverStargazers = {
  type: StargazersAction;
  payload?: {};
};

type OverStargazers = {
  type: StargazersAction;
  payload?: {};
};

type EmptyStargazers = {
  type: StargazersAction;
  payload?: {};
};

type ActionsStargazers =
  | InitStargazers
  | SuccessStargazers
  | FailureStargazers
  | OverStargazers
  | MakeRequestStargazers;
