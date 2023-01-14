import React from 'react';
import {mockedStarred, mockedUser} from '../../api/__mocks__/github';
import ListUserItem from '../ListUserItem';
import {render} from '@testing-library/react-native';

describe('ListUserItem', () => {
  describe('when type is Starred', () => {
    it('should render login name', () => {
      const component = render(<ListUserItem info={mockedStarred} />);
      expect(component.queryByText(mockedStarred.user.login)).not.toBeNull();
    });

    it('should render timestamp', () => {
      const component = render(<ListUserItem info={mockedStarred} />);
      expect(component.queryByTestId('timestamp')).not.toBeUndefined();
    });

    it('should render avatar', () => {
      const component = render(<ListUserItem info={mockedStarred} />);
      const avatarView = component.queryByTestId('avatarView');
      const avatar = avatarView?.children[0];
      if (avatar !== undefined && typeof avatar !== 'string') {
        expect(
          avatar.props.source.uri === mockedStarred.user.avatar_url,
        ).toBeTruthy();
      } else {
        fail('Avatar not rendered');
      }
    });
  });
  describe('when type is user', () => {
    it('should render login name', () => {
      const component = render(<ListUserItem info={mockedUser} />);
      expect(component.queryByText(mockedStarred.user.login)).not.toBeNull();
    });

    it('should render timestamp', () => {
      const component = render(<ListUserItem info={mockedUser} />);
      expect(component.queryByTestId('timestamp')).not.toBeUndefined();
    });
  });
});
