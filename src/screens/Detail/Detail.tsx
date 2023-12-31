import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  Box,
  Button,
  Center,
  HStack,
  ScrollView,
  Spinner,
  Text,
  VStack,
} from 'native-base';
import React, {useCallback, useContext, useMemo} from 'react';
import {Image} from 'react-native';

import {AppStackParamList} from '../../navigation/AppNavigator';
import {useMovieDetail} from '../../hooks/useMovieDetail';
import {HeaderLayout} from '../../layout/HeaderLayout/HeaderLayout';
import {styles} from './styles';
import {getMoviePosterPath} from '../../utils/util';
import {FavoriteContext} from '../../context/FavoriteContext';

type DetailScreenRouteProp = RouteProp<AppStackParamList, 'Details'>;

export function DetailScreen() {
  const navigation = useNavigation();
  const route = useRoute<DetailScreenRouteProp>();
  const {movieId} = route.params;
  const {data, isLoading} = useMovieDetail(movieId);

  const {isFavorite, addFavorite, removeFavorite} = useContext(FavoriteContext);

  const favorited = useMemo(() => {
    if (isFavorite && isFavorite(movieId)) {
      return true;
    }
    return false;
  }, [isFavorite, movieId]);

  const handleFavorite = useCallback(() => {
    if (favorited) {
      removeFavorite?.(movieId);
    } else {
      addFavorite?.(movieId);
    }
  }, [favorited, removeFavorite, addFavorite, movieId]);

  return (
    <HeaderLayout title="Movie Details" goBack={navigation.goBack}>
      <Box flex={1} testID="Movie-Details">
        {isLoading && (
          <Center flex={1}>
            <Spinner />
          </Center>
        )}
        {!isLoading && data && (
          <>
            <Box p={4} bgColor="textBg">
              <Text color="white" style={styles.title} testID="Movie-Title">
                {data.original_title}
              </Text>
            </Box>
            <ScrollView bgColor={'white'}>
              <HStack p={6}>
                <Image
                  source={{uri: getMoviePosterPath(data.poster_path)}}
                  style={styles.image}
                  testID={`Movie-Poster-${data.id}`}
                />
                <VStack flex={1} ml={6} justifyContent="space-between">
                  <Text
                    color="gray.dark"
                    style={styles.releaseDate}
                    testID="Movie-Release-Date">
                    {data.release_date}
                  </Text>
                  <Text
                    color="gray.dark"
                    style={styles.rating}
                    testID="Movie-Score">
                    {data.vote_average.toFixed(1)} / 10
                  </Text>
                  <Button
                    bgColor="textBg"
                    style={styles.favoriteButton}
                    onPress={handleFavorite}>
                    <Text
                      color="white"
                      style={styles.favoriteButtonText}
                      testID="Btn-Favorite">
                      {favorited ? 'Remove from Favorites' : 'Add to Favorites'}
                    </Text>
                  </Button>
                </VStack>
              </HStack>
              <Text color="gray.medium" px={6} style={styles.overview}>
                {data.overview}
              </Text>
            </ScrollView>
          </>
        )}
      </Box>
    </HeaderLayout>
  );
}
