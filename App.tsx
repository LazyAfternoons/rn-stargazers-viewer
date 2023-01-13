// src/App.tsx
import './src/localization/i18n';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import {customTheme} from './src/themes/theme';
import {StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNav from './src/navigators/MainStackNav';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <StatusBar animated={true} barStyle={'dark-content'} />
        <SafeAreaProvider>
          <NavigationContainer>
            <MainStackNav />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
