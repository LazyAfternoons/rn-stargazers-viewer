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

type TypeStargazers = 'INIT' | 'MAKE_REQUEST' | 'SUCCESS' | 'FAIL' | 'OVER';

type InitStargazers = {
  type: ActionsType;
  payload: initParamsType;
};

type InitStargazersParams = getStargazersPayload;

type MakeRequestStargazers = {
  type: ActionsType;
  payload?: {};
};

type SuccessStargazers = {
  type: ActionsType;
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
  type: ActionsType;
  payload?: {};
};

type ActionsStargazers =
  | InitStargazers
  | SuccessStargazers
  | FailureStargazers
  | OverStargazers
  | MakeRequestStargazers;
