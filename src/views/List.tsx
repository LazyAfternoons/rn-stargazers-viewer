import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import ListEmptyView from '../components/ListEmptyView';
import ListFooterView from '../components/ListFooterView';
import ListUserItem, {keyExtractor} from '../components/ListUserItem';
import {MainStackNavParamList} from '../navigators/MainStackNav';
import {initStargazers, makeStargazersRequest} from '../store/actions';
import {StargazersReduxProps} from '../types/actions';
import {Starred, User} from '../types/github';
import {RootState} from '../types/reducers';

/**
 * User per page costant for Github Stargazers endpoint. Defaults to 30 per API.
 */
const PER_PAGE = 30;

/**
 * Start page constant for Github Stargazers endpoint. Defaults to 1 per API.
 */
const START_PAGE = 1;

/**
 * Props for {@link List} screen.
 */
type ListProps = StargazersReduxProps &
  NativeStackScreenProps<MainStackNavParamList, 'List'>;

const List = ({stargazers, dispatch, navigation, route}: ListProps) => {
  const {t} = useTranslation();

  /**
   * Function which renders an item of the Stargazers list.
   */
  const renderItem = ({item}: ListRenderItemInfo<User | Starred>) => (
    <ListUserItem info={item} />
  );

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
   * Dispatches the initialize action to perform the fist request.
   */
  const init = () => {
    dispatch(
      initStargazers({...route.params, perPage: PER_PAGE, page: START_PAGE}),
    );
  };

  /**
   * Side effect to display error messages, if any.
   */
  useEffect(() => {
    if (stargazers.error != null) {
      Alert.alert(
        t('generic.error'),
        t(`api_error.${stargazers.error.code}`) || '',
        stargazers.list
          ? []
          : [{text: 'OK', onPress: () => navigation.goBack()}], //goBack only if the list doesn't have any item
      );
    }
    // Trigger the event only when error changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stargazers.error]);

  useEffect(() => {
    init();
    // Trigger the event only on mounting
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={viewStyle.outer}>
      {stargazers.list !== null && !stargazers.loading ? (
        <FlatList
          keyExtractor={keyExtractor}
          data={stargazers.list}
          renderItem={renderItem}
          ListFooterComponent={
            <ListFooterView
              isOver={stargazers.isOver}
              loading={stargazers.nextPageLoading}
            />
          }
          ListEmptyComponent={ListEmptyView}
          onEndReachedThreshold={0.5}
          onEndReached={makeRequest}
          initialNumToRender={PER_PAGE}
        />
      ) : (
        <View style={viewStyle.loading}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    stargazers: state.stargazers,
  };
};

export default connect(mapStateToProps)(List);

const viewStyle = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  outer: {
    flex: 1,
  },
});
