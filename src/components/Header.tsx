import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {useTextStyles} from '../themes/theme';

/**
 * Props of {@link Header}.
 */
type HeaderProps = {
  containerStyle?: StyleProp<ViewStyle>;
};

/**
 * Header for the home screen.
 * @param containerStyle - Optional style for the outer view container.
 */
const Header = ({containerStyle}: HeaderProps) => {
  const styles = useTextStyles();
  const {t} = useTranslation();
  return (
    <View style={containerStyle}>
      <Text style={styles.title}>{t('home.title')}</Text>
      <Text style={styles.caption}>{t('home.description')}</Text>
    </View>
  );
};

export default Header;
