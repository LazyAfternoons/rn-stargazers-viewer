// src/App.tsx
import './src/localization/i18n';
import React from 'react';
import {Provider} from 'react-redux';
import Home from './src/screens/Home';
import {store} from './src/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import {customTheme} from './src/themes/theme';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <StatusBar animated={true} barStyle={'dark-content'} />
        <SafeAreaProvider>
          <Home />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
