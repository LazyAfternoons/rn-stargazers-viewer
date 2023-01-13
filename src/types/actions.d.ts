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
  type: 'INIT';
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
  type: 'MAKE_REQUEST';
  payload?: {};
};

/**
 * Input type parameters for the RESET action.
 */
type ResetStargazers = {
  type: 'RESET';
  payload?: {};
};

/**
 * Input type parameters for the SUCCESS action.
 */
type SuccessStargazers = {
  type: 'SUCCESS';
  payload: {
    list: Exclude<StateStargazers['list'], null>;
    page: StateStargazers['page'];
  };
};

/**
 * Input type parameters for the FAILURE action.
 */
type FailureStargazers = {
  type: 'FAIL';
  payload: {
    error: Exclude<StateStargazers['error'], null>;
  };
};

/**
 * Input type parameters for the OVER action.
 */
type OverStargazers = {
  type: 'OVER';
  payload?: {};
};

/**
 * Input type parameters for the SUCCESS action.
 */
type EmptyStargazers = {
  type: 'EMPTY';
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
  | EmptyStargazers
  | ResetStargazers;

/**
 * Stargazers redux props inject in components when using connect()
 */
type StargazersReduxProps = {
  stargazers: StateStargazers;
  dispatch: Dispatch<InitStargazers | MakeRequestStargazers>;
};
