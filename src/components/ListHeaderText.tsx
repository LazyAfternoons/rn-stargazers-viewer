import {Text} from '@rneui/themed';
import React from 'react';
import {useTextStyles} from '../themes/theme';

/**
 * A text component which works as header for the stargaizers list.
 */
const ListHeaderText = () => {
  const textStyles = useTextStyles();
  return <Text style={textStyles.subHeader}>Stargazers</Text>;
};

export default ListHeaderText;
