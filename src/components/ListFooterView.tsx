import React from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator, Text, View} from 'react-native';
import {useTextStyles} from '../themes/theme';

/**
 * Props for the `ListFooterView` component.
 */
export type ListFooterViewProps = {
  /**
   * True if the list is over, false otherwise.
   */
  isOver: boolean;
  /**
   * True if the list is loading more elements, false otherwise.
   */
  loading: boolean;
};

/**
 * A view for rendering a footer in stargazers list. It either displays an activity indicator
 */
const ListFooterView = ({isOver, loading}: ListFooterViewProps) => {
  const textStyles = useTextStyles();
  const {t} = useTranslation();
  return (
    <View>
      {loading && <ActivityIndicator animating={loading} size={'large'} />}
      {isOver && <Text style={textStyles.centered}>{t('list.over')}</Text>}
    </View>
  );
};

export default ListFooterView;
