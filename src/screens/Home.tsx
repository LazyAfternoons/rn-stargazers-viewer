import React, {Dispatch, useEffect} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {initStargazers, makeStargazersRequest} from '../store/actions';
import RepoInputForm, {RepoFormData} from '../components/RepoInputForm';
import {RootState} from '../types/reducers';
import Header from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListFooterView from '../components/ListFooterView';
import ListEmptyView from '../components/ListEmptyView';
import ListHeaderText from '../components/ListHeaderText';
import ListUserItem, {keyExtractor} from '../components/ListUserItem';
import {useTranslation} from 'react-i18next';

/**
 * User per page costant for Github Stargazers endpoint. Defaults to 30 per API.
 */
const PER_PAGE = 30;

/**
 * Start page constant for Github Stargazers endpoint. Defaults to 1 per API.
 */
const START_PAGE = 1;

/**
 * Props for {@link Home} component.
 */
type HomeProps = {
  /**
   * Redux state for keeping a state of the list.
   */
  stargazers: StateStargazers;
  /**
   * Redux dispatcher.
   */
  dispatch: Dispatch<InitStargazers | MakeRequestStargazers>;
};

/**
 * Home component which includes a brief description, a form to input relevant data to query Github Stargazers API and a list which contains the result of the call.
 */
const Home = ({stargazers, dispatch}: HomeProps) => {
  const {t} = useTranslation();

  /**
   * Function which renders an item of the Stargazers list.
   */
  const renderItem = ({item}: ListRenderItemInfo<User>) => (
    <ListUserItem user={item} />
  );

  /**
   * Form submit callback to be sent to {@link RepoInputForm}.
   * Takes the data returned from the callback and dispatches the state initialization which fetches the first page.
   * @param data - the form data returned during the callback.
   */
  const submitHandler = (data: RepoFormData) => {
    dispatch(initStargazers({...data, perPage: PER_PAGE, page: START_PAGE}));
  };

  /**
   * Helper function to dispatch a new action which performs a request on the next page of the list.
   * It checks if the list is over, is loading or is in an error state before proceeding.
   * This helps avoiding spam especially with the onEndReach callback of the underlying FlatList component.
   */
  const makeRequest = () => {
    if (
      !stargazers.isOver &&
      !stargazers.loading &&
      !stargazers.nextPageLoading &&
      !stargazers.error
    ) {
      dispatch(makeStargazersRequest());
    }
  };

  /**
   * Side effect to display error messages, if any.
   */
  useEffect(() => {
    if (stargazers.error != null) {
      console.log(stargazers.error);
      Alert.alert(
        t('generic.error'),
        t(`api_error.${stargazers.error.code}`) || '',
      );
    }
  }, [stargazers.error, t]);

  return (
    <SafeAreaView
      edges={['top', 'right', 'left', 'bottom']}
      style={viewStyle.safeArea}>
      <View style={viewStyle.paddedHeader}>
        <Header />
        <RepoInputForm handler={submitHandler} />
      </View>
      {stargazers.list !== null && !stargazers.loading ? (
        <FlatList
          keyExtractor={keyExtractor}
          data={stargazers.list}
          renderItem={renderItem}
          ListHeaderComponent={ListHeaderText}
          ListFooterComponent={
            <ListFooterView
              isOver={stargazers.isOver}
              loading={stargazers.nextPageLoading}
            />
          }
          ListEmptyComponent={ListEmptyView}
          onEndReachedThreshold={0.5}
          onEndReached={makeRequest}
          stickyHeaderIndices={[0]}
          initialNumToRender={PER_PAGE}
        />
      ) : (
        <></>
      )}
      {stargazers.loading ? (
        <View style={viewStyle.loading}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <></>
      )}
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
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },
  paddedHeader: {
    padding: 25,
  },
});
