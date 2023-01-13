import axios from 'axios';

/** Creates an axios instance with github's API base URL */
const axiosInst = axios.create({
  baseURL: 'https://api.github.com',
});

/**
 * Gets the list of users who have added the given repository to their favorites, namely stargazers
 *
 * @remarks
 * API documentation can be found {@link https://docs.github.com/en/rest/activity/starring?apiVersion=2022-11-28 | here}.
 *
 * @param owner - The owner of the repository.
 * @param repo - The repository name.
 * @param perPage - The number of users returned per page.
 * @param page - The number of the requested page, starts from 1.
 * @param withTimestamp - True if the starred_at timestamp has to be included, false otherwise. If true returns a Starred array.
 * @returns An array of users of Starred if withTimestamp is true, an array of User otherwise.
 */
export async function getStargazers({
  owner,
  repo,
  perPage,
  page,
  withTimestamp,
}: getStargazersPayload): Promise<Array<User | Starred>> {
  const res = await axiosInst.get(`/repos/${owner}/${repo}/stargazers`, {
    headers: {
      Accept: withTimestamp
        ? 'application/vnd.github.star+json'
        : 'application/vnd.github+json',
    },
    params: {
      per_page: perPage,
      page: page,
    },
  });
  return res.data;
}
