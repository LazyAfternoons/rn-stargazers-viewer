import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {useTextStyles, useViewStyles} from '../themes/theme';

/**
 * A view for empty stargazers list.
 */
const ListEmptyView = () => {
  const {t} = useTranslation();
  const textStyles = useTextStyles();
  const viewStyles = useViewStyles();
  return (
    <View style={viewStyles.growCentered}>
      <Text style={textStyles.centered}>{t('list.empty')}</Text>
    </View>
  );
};

export default ListEmptyView;
