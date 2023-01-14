import React from 'react';
import {render} from '@testing-library/react-native';
import ListFooterView from '../ListFooterView';

describe('ListFooterView', () => {
  it('when loading is true and isOver is false only an activity indicated should be rendered', () => {
    const component = render(<ListFooterView loading={true} isOver={false} />);
    expect(component.getByTestId('loading')).toBeDefined();
    expect(component.queryByTestId('overView')).toBeNull();
  });

  it('when isOver is true and loading is false only a view should be rendered', () => {
    const component = render(<ListFooterView loading={false} isOver={true} />);
    expect(component.queryByTestId('loading')).toBeNull();
    expect(component.getByTestId('overView')).toBeDefined();
  });
});
