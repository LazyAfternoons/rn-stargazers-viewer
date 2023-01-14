import {Dispatch} from 'react';
import {getStargazersPayload} from './github';

/**
 * Type which shapes the stargazers state.
 * Includes data regarding the repository, the page to be fetched and other flags regarding its state.
 */
export type StateStargazers = {
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
export enum StargazersAction {
  INIT = 'INIT',
  MAKE_REQUEST = 'MAKE_REQUEST',
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
  OVER = 'OVER',
  RESET = 'RESET',
  EMPTY = 'EMPTY',
}

/**
 * Init action type.
 */
export type InitStargazers = {
  type: StargazersAction.INIT;
  payload: Required<getStargazersPayload>;
};

/**
 * Input type parameters for the INIT action.
 */
export type InitStargazersParams = Required<getStargazersPayload>;

/**
 * Input type parameters for the MAKE_REQUEST action.
 */
export type MakeRequestStargazers = {
  type: StargazersAction.MAKE_REQUEST;
  payload?: {};
};

/**
 * Input type parameters for the RESET action.
 */
export type ResetStargazers = {
  type: StargazersAction.RESET;
  payload?: {};
};

/**
 * Input type parameters for the SUCCESS action.
 */
export type SuccessStargazers = {
  type: StargazersAction.SUCCESS;
  payload: {
    list: Exclude<StateStargazers['list'], null>;
    page: StateStargazers['page'];
  };
};

/**
 * Input type parameters for the FAILURE action.
 */
export type FailureStargazers = {
  type: StargazersAction.FAIL;
  payload: {
    error: Exclude<StateStargazers['error'], null>;
  };
};

/**
 * Input type parameters for the OVER action.
 */
export type OverStargazers = {
  type: StargazersAction.OVER;
  payload?: {};
};

/**
 * Input type parameters for the EMPTY action.
 */
export type EmptyStargazers = {
  type: StargazersAction.EMPTY;
  payload?: {};
};

/**
 * Every possible action.
 */
export type ActionsStargazers =
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
export type StargazersReduxProps = {
  stargazers: StateStargazers;
  dispatch: Dispatch<InitStargazers | MakeRequestStargazers | ResetStargazers>;
};
