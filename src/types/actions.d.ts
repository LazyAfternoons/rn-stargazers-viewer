/**
 * Type which shapes the stargazers state.
 * Includes data regarding the repository, the page to be fetched and other flags regarding its state.
 */
type StateStargazers = {
  owner: string | null;
  repo: string | null;
  loading: boolean;
  nextPageLoading: boolean;
  error: {code: string; message: string} | null;
  isOver: boolean;
  page: number;
  perPage: number;
  withTimestamp: boolean;
  list: any[] | null;
};

/**
 * Actions possibilities.
 */
type StargazersAction =
  | 'INIT'
  | 'MAKE_REQUEST'
  | 'SUCCESS'
  | 'FAIL'
  | 'OVER'
  | 'EMPTY'
  | 'RESET';

/**
 * Init action type.
 */
type InitStargazers = {
  type: StargazersAction;
  payload: initParamsType;
};

/**
 * Input type parameters for the INIT action.
 */
type InitStargazersParams = getStargazersPayload;

/**
 * Input type parameters for the MAKE_REQUEST action.
 */
type MakeRequestStargazers = {
  type: StargazersAction;
  payload?: {};
};

/**
 * Input type parameters for the RESET action.
 */
type ResetStargazers = {
  type: StargazersAction;
  payload?: {};
};

/**
 * Input type parameters for the SUCCESS action.
 */
type SuccessStargazers = {
  type: StargazersAction;
  payload: {
    list: Pick<StateStargazers, 'list'>;
    page: Pick<StateStargazers, 'page'>;
  };
};

/**
 * Input type parameters for the FAILURE action.
 */
type FailureStargazers = {
  type: 'FAIL';
  payload: {
    error: Pick<StateStargazers, 'error'>;
  };
};

/**
 * Input type parameters for the OVER action.
 */
type OverStargazers = {
  type: StargazersAction;
  payload?: {};
};

/**
 * Input type parameters for the SUCCESS action.
 */
type EmptyStargazers = {
  type: StargazersAction;
  payload?: {};
};

/**
 * Every possible action.
 */
type ActionsStargazers =
  | InitStargazers
  | SuccessStargazers
  | FailureStargazers
  | OverStargazers
  | MakeRequestStargazers
  | EmptyStargazers;
