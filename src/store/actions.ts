import {
  InitStargazers,
  InitStargazersParams,
  MakeRequestStargazers,
  ResetStargazers,
  StargazersAction,
} from '../types/actions';

/**
 * Carries the INIT action payload to the Redux store with the information regarding the repository.
 * @param owner - The owner of the repository.
 * @param repo - The repository name.
 * @param perPage - The number of users returned per page.
 * @param page - The number of the requested page, starts from 1.
 * @param withTimestamp - True if the starred_at timestamp has to be included, false otherwise. If true returns a Starred array.
 */
export const initStargazers = (
  params: InitStargazersParams,
): InitStargazers => ({
  type: StargazersAction.INIT,
  payload: {
    owner: params.owner,
    repo: params.repo,
    perPage: params.perPage,
    page: params.page,
    withTimestamp: params.withTimestamp,
  },
});

/**
 * Carries the RESET action payload to the Redux store for resetting the state to the initial one.
 */
export const resetStargazers = (): ResetStargazers => ({
  type: StargazersAction.RESET,
});

/**
 * Carries the MAKE_REQUEST action payload to the Redux store for performing a new request.
 */
export const makeStargazersRequest = (): MakeRequestStargazers => ({
  type: StargazersAction.MAKE_REQUEST,
});
