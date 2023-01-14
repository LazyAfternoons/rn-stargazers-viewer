/**
 * Basic user response when listing stargazers without timestamps.
 */
export type User = {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
};

/**
 * Response type when listing stargazers with timestamps.
 */
export type Starred = {
  starred_at: string;
  user: User;
};

/**
 * Input parameters for getStargazers function with or without timestamps.
 */
export type getStargazersPayload = {
  owner: string;
  repo: string;
  perPage: number;
  page: number;
  withTimestamp?: boolean;
};
