import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
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
  };

  return (
    <SafeAreaView
      edges={['top', 'right', 'left', 'bottom']}
      style={viewStyle.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={viewStyle.paddedHeader}>
        <Header />
        <RepoInputForm handler={submitHandler} />
      </KeyboardAvoidingView>
    </SafeAreaView>
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
    justifyContent: 'space-between',
  },
  paddedHeader: {
    padding: 25,
  },
});
