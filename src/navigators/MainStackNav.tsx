import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {RepoFormData} from '../components/RepoInputForm';
import Home from '../views/Home';
import List from '../views/List';

/**
 * MainStackNav parameters list for each defined screen.
 */
export type MainStackNavParamList = {
  Home: undefined;
  List: RepoFormData;
};

const Stack = createNativeStackNavigator<MainStackNavParamList>();

/**
 * Main stack navigator of the app.
 */
const MainStackNav = () => {
  const screenOptions: NativeStackNavigationOptions = {
    headerTitleAlign: 'center',
    animation: 'slide_from_right',
  };

  return (
    <Stack.Navigator
      id="MainStackNav"
      screenOptions={screenOptions}
      initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="List"
        component={List}
        options={{headerTitle: 'Stargazers'}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNav;
