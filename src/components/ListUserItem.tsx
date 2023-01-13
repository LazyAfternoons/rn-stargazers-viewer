import {Avatar, ListItem} from '@rneui/themed';
import React, {memo} from 'react';

/**
 * Props for the {@link ListUserItemProps} component.
 */
type ListUserItemProps = {
  /**
   * User information.
   */
  info: User | Starred;
};

/**
 * Component for rendering an item in a list of stargazers.
 * The function is wrapped into React.memo in an effort to optmize FlatList performances.
 * Given that we are only appending new elements to the list, we do not need to rerender previous items.
 */
const ListUserItem = memo(({info}: ListUserItemProps) => {
  const isStarred = 'starred_at' in info;
  return (
    <ListItem bottomDivider>
      <Avatar
        size="medium"
        rounded
        source={{uri: isStarred ? info.user.avatar_url : info.avatar_url}}
      />
      <ListItem.Content>
        <ListItem.Title>
          {isStarred ? info.user.login : info.login}
        </ListItem.Title>
        {isStarred ? (
          <ListItem.Title>
            {new Date(info.starred_at).toLocaleString()}
          </ListItem.Title>
        ) : (
          <></>
        )}
      </ListItem.Content>
    </ListItem>
  );
});

/**
 * Extracts a unique key from a User object based on the user id.
 * @param info - user information.
 * @returns a unique identifier.
 */
export const keyExtractor = (info: User | Starred) => {
  const isStarred = 'starred_at' in info;
  return isStarred ? info.user.id.toString() : info.id.toString();
};

export default ListUserItem;
