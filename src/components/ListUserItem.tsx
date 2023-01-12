import {Avatar, ListItem} from '@rneui/themed';
import React, {memo} from 'react';

/**
 * Props for the {@link ListUserItemProps} component.
 */
type ListUserItemProps = {
  /**
   * User information.
   */
  user: User;
};

/**
 * Component for rendering an item in a list of stargazers.
 */
const ListUserItem = memo(({user}: ListUserItemProps) => {
  return (
    <ListItem bottomDivider>
      <Avatar size="medium" rounded source={{uri: user.avatar_url}} />
      <ListItem.Content>
        <ListItem.Title>{user.login}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
});

/**
 * Extracts a unique key from a User object based on the user id.
 * @param info - user information.
 * @returns a unique identifier.
 */
export const keyExtractor = (info: User) => info.id.toString();

export default ListUserItem;