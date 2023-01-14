import React from 'react';
import {Keyboard, Pressable, StyleSheet, View} from 'react-native';
import RepoInputForm, {RepoFormData} from '../components/RepoInputForm';
import Header from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackNavParamList} from '../navigators/MainStackNav';
import {RootState} from '../types/reducers';
import {connect} from 'react-redux';
import {resetStargazers} from '../store/actions';

type HomeProps = StargazersReduxProps &
  NativeStackScreenProps<MainStackNavParamList, 'Home'>;

/**
 * Home component which includes a brief description, a form to input relevant data to query Github Stargazers API and a list which contains the result of the call.
 */
const Home = ({dispatch, navigation}: HomeProps) => {
  /**
   * Form submit callback to be sent to {@link RepoInputForm}.
   * Takes the data returned from the callback and dispatches the state initialization which fetches the first page.
   * @param data - the form data returned during the callback.
   */
  const submitHandler = (data: RepoFormData) => {
    dispatch(resetStargazers());
    navigation.navigate('List', {...data});
    Keyboard.dismiss();
  };

  return (
    <Pressable style={viewStyle.pressable} onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        edges={['top', 'right', 'left', 'bottom']}
        style={viewStyle.safeArea}>
        <View style={viewStyle.paddedOuter}>
          <Header />
          <RepoInputForm
            containerStyle={formStyle.container}
            fieldsContainerStyle={formStyle.fields}
            submitContainerStyle={formStyle.submit}
            handler={submitHandler}
          />
        </View>
      </SafeAreaView>
    </Pressable>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    stargazers: state.stargazers,
  };
};

export default connect(mapStateToProps)(Home);

const viewStyle = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  paddedOuter: {
    padding: 25,
    flex: 1,
  },
  pressable: {
    flex: 1,
  },
});

const formStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  fields: {
    justifyContent: 'flex-start',
  },
  submit: {
    justifyContent: 'flex-end',
    flex: 1,
  },
});
