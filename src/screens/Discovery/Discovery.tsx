import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Box, FlatList, Spinner, Text} from 'native-base';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {AppStackParamList} from '../../navigation/AppNavigator';
import {Movie} from '../../utils/types';
import {HeaderLayout} from '../../layout/HeaderLayout/HeaderLayout';
import {styles} from './styles';
import useMovies from '../../hooks/useMovies';
import {getMoviePosterPath} from '../../utils/util';

export type DiscoveryScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  'Details'
>;

export function DiscoveryScreen() {
  const navigation = useNavigation<DiscoveryScreenNavigationProp>();
  const {loadedMovies, loadMore, isLoading, isError} = useMovies();

  const onPressItem = (item: Movie) => {
    navigation.navigate('Details', {movieId: item.id});
  };

  const renderItem = ({item}: {item: Movie}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem(item)}
        style={styles.itemWrapper}>
        <Image
          source={{uri: getMoviePosterPath(item.poster_path)}}
          style={styles.movie}
          testID={`movie-image-${item.id}`}
        />
      </TouchableOpacity>
    );
  };

  const renderListEmpty = () => {
    if (isLoading) {
      return null;
    }
    if (isError) {
      return <Text textAlign={'center'}>Error loading movies</Text>;
    } else {
      return <Text textAlign={'center'}>No movies available</Text>;
    }
  };

  const renderListFooter = () => {
    if (isLoading) {
      return <Spinner mt={5} />;
    }
    return null;
  };

  return (
    <HeaderLayout title="Pop Movies">
      <Box flex={1} testID="Movie-Search">
        <FlatList
          ListEmptyComponent={renderListEmpty}
          ListFooterComponent={renderListFooter}
          data={loadedMovies}
          renderItem={renderItem}
          numColumns={2}
          onEndReachedThreshold={0.5}
          onEndReached={loadMore}
          contentContainerStyle={styles.scroll}
        />
      </Box>
    </HeaderLayout>
  );
}
