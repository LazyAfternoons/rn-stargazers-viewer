import {combineReducers} from 'redux';
import {
  ActionsStargazers,
  StargazersAction,
  StateStargazers,
} from '../types/actions';

/**
 * The initial state of {@link StargazersReducer}
 */
export const initialState: StateStargazers = {
  owner: null,
  repo: null,
  loading: false,
  nextPageLoading: false,
  error: null,
  isOver: false,
  page: 0,
  perPage: 30,
  withTimestamp: false,
  list: null,
};

/**
 * Main reducer for dispatching actions and calculating the new state.
 * @remarks
 * Dispatches four states:
 * INIT, when the application is initialied with the request parameters. Resets the result list, any loading state and also the error state;
 * MAKE_REQUEST, when the application is making a request with the parameters set during the INIT state.
 * If the first page is being requested then set a global loading state to true. Sets the nextPageLoading to true otherwise.
 * SUCCESS, when the request returned a success status. Resets any loading or error and updates the list along with the new page increased by 1 from the saga;
 * FAIL, when the request returned a failure status. Resets any loading error and sets the error state;
 * OVER, when list is over, resets any loading state and sets isOver to true.
 * @param state - The current state, defaults to {@link initialState}
 * @param action - The current action to be dispatched.
 * @returns The new state or the current one if the action is not recognized.
 */
export const StargazersReducer = (
  state: StateStargazers = initialState,
  action: ActionsStargazers,
): StateStargazers => {
  switch (action.type) {
    case StargazersAction.INIT:
      return {
        ...state,
        owner: action.payload.owner,
        repo: action.payload.repo,
        page: action.payload.page,
        perPage: action.payload.perPage,
        withTimestamp: action.payload.withTimestamp,
        list: null,
        isOver: false,
        error: null,
        nextPageLoading: false,
        loading: true,
      };

    case StargazersAction.MAKE_REQUEST:
      return {...state, nextPageLoading: true};

    case StargazersAction.SUCCESS:
      return {
        ...state,
        //if the list state is not null then append new elements to the current state, otherwise take only the action payload list.
        list: state.list
          ? [...state.list, ...action.payload.list]
          : [...action.payload.list],
        page: action.payload.page,
        error: null,
        loading: false,
        nextPageLoading: false,
      };

    case StargazersAction.FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        nextPageLoading: false,
      };

    case StargazersAction.OVER:
      return {
        ...state,
        isOver: true,
        loading: false,
        nextPageLoading: false,
      };

    case StargazersAction.EMPTY:
      return {
        ...state,
        list: [],
        loading: false,
        nextPageLoading: false,
      };

    case StargazersAction.RESET:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

/**
 * Creates the root reducer by combining other reducers.
 */
export const rootReducer = combineReducers({
  stargazers: StargazersReducer,
});
