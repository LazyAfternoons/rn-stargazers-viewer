import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';

/**
 * A view for empty stargazers list.
 */
const ListEmptyView = () => {
  const {t} = useTranslation();
  return (
    <View>
      <Text>{t('list.empty')}</Text>
    </View>
  );
};

export default ListEmptyView;
