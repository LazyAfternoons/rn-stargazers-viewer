import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import RepoInputForm from '../RepoInputForm';
import {act} from 'react-test-renderer';

const mockHandler = jest.fn();

describe('RepoInputForm', () => {
  //Cannot test for errors or isValid because these values always seems to be undefined on React Native, no matter what
  describe('should not call mockHanler', () => {
    it('with missing owner', async () => {
      const {getByTestId} = render(<RepoInputForm handler={mockHandler} />);

      await act(async () => {
        fireEvent.changeText(getByTestId('repoInput'), 'ABCDEFG');
      });
      await act(async () => {
        fireEvent.press(getByTestId('submitButton'));
      });

      expect(mockHandler).not.toBeCalled();
    });

    it('with missing repo', async () => {
      const {getByTestId} = render(<RepoInputForm handler={mockHandler} />);

      await act(async () => {
        fireEvent.changeText(getByTestId('ownerInput'), 'ABCDEFG');
      });
      await act(async () => {
        fireEvent.press(getByTestId('submitButton'));
      });

      expect(mockHandler).not.toBeCalled();
    });
  });

  it('should call mockHandler with both parameters available', async () => {
    const {getByTestId} = render(<RepoInputForm handler={mockHandler} />);
    const owner = 'ABCDEFG';
    const repo = '1234567';
    await act(async () => {
      fireEvent.changeText(getByTestId('ownerInput'), owner);
    });
    await act(async () => {
      fireEvent.changeText(getByTestId('repoInput'), repo);
    });
    await act(async () => {
      fireEvent.press(getByTestId('submitButton'));
    });

    expect(mockHandler).toBeCalled();
    expect(mockHandler.mock.calls[0][0].owner).toBe(owner);
    expect(mockHandler.mock.calls[0][0].repo).toBe(repo);
  });

  it('when containerStyle is provided the outer view applies the style', () => {
    const style = {padding: 25};
    const component = render(
      <RepoInputForm containerStyle={style} handler={() => {}} />,
    );
    expect(component.getByTestId('outerView').props.style).toEqual(style);
  });

  it('when fieldsContainerStyle is provided the view merges the style', () => {
    const style = {padding: 25};
    const component = render(
      <RepoInputForm fieldsContainerStyle={style} handler={() => {}} />,
    );
    //This applies a default style from theming, thus we are checking with toContain if the style is properly merged
    expect(component.getByTestId('fieldsView').props.style).toContain(style);
  });

  it('when submitContainerStyle is provided the view applies the style', () => {
    const style = {padding: 25};
    const component = render(
      <RepoInputForm submitContainerStyle={style} handler={() => {}} />,
    );
    expect(component.getByTestId('submitView').props.style).toEqual(style);
  });
});
