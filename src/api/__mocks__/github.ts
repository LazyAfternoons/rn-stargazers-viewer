import {Starred, User} from '../../types/github';

export const mockedStarred: Starred = {
  starred_at: '2020-07-30T05:01:38Z',
  user: {
    login: 'warisanwar',
    id: 28192108,
    node_id: 'MDQ6VXNlcjI4MTkyMTA4',
    avatar_url: 'https://avatars.githubusercontent.com/u/28192108?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/warisanwar',
    html_url: 'https://github.com/warisanwar',
    followers_url: 'https://api.github.com/users/warisanwar/followers',
    following_url:
      'https://api.github.com/users/warisanwar/following{/other_user}',
    gists_url: 'https://api.github.com/users/warisanwar/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/warisanwar/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/warisanwar/subscriptions',
    organizations_url: 'https://api.github.com/users/warisanwar/orgs',
    repos_url: 'https://api.github.com/users/warisanwar/repos',
    events_url: 'https://api.github.com/users/warisanwar/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/warisanwar/received_events',
    type: 'User',
    site_admin: false,
  },
};

export const mockedUser: User = {
  login: 'warisanwar',
  id: 28192108,
  node_id: 'MDQ6VXNlcjI4MTkyMTA4',
  avatar_url: 'https://avatars.githubusercontent.com/u/28192108?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/warisanwar',
  html_url: 'https://github.com/warisanwar',
  followers_url: 'https://api.github.com/users/warisanwar/followers',
  following_url:
    'https://api.github.com/users/warisanwar/following{/other_user}',
  gists_url: 'https://api.github.com/users/warisanwar/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/warisanwar/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/warisanwar/subscriptions',
  organizations_url: 'https://api.github.com/users/warisanwar/orgs',
  repos_url: 'https://api.github.com/users/warisanwar/repos',
  events_url: 'https://api.github.com/users/warisanwar/events{/privacy}',
  received_events_url:
    'https://api.github.com/users/warisanwar/received_events',
  type: 'User',
  site_admin: false,
};
