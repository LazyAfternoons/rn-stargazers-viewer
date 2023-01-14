import React from 'react';
import {render} from '@testing-library/react-native';
import Header from '../Header';

describe('Header', () => {
  describe('when containerStyle is provided', () => {
    it('should apply the style to the outer view', () => {
      const style = {padding: 25};
      const component = render(<Header containerStyle={style} />);
      expect(component.getByTestId('view').props.style).toEqual(style);
    });
  });
});
