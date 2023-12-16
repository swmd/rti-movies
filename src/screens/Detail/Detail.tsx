import {RouteProp, useRoute} from '@react-navigation/native';
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
import React from 'react';
import {Image} from 'react-native';

import {AppStackParamList} from '../../navigation/AppNavigator';
import useMovieDetail from '../../hooks/useMovieDetail';
import {HeaderLayout} from '../../layout/HeaderLayout/HeaderLayout';
import {styles} from './styles';
import {getMoviePosterPath} from '../../utils/util';

type DetailScreenRouteProp = RouteProp<AppStackParamList, 'Details'>;

export function DetailScreen() {
  const route = useRoute<DetailScreenRouteProp>();
  const {movieId} = route.params;
  const {data, isLoading} = useMovieDetail(movieId);

  return (
    <HeaderLayout title="Movie Details">
      <Box flex={1} testID="Movie-Details">
        {isLoading && (
          <Center flex={1}>
            <Spinner />
          </Center>
        )}
        {!isLoading && data && (
          <>
            <Box p={4} bgColor="textBg">
              <Text color="white" style={styles.title}>
                {data.original_title}
              </Text>
            </Box>
            <ScrollView bgColor={'white'}>
              <HStack p={6}>
                <Image
                  source={{uri: getMoviePosterPath(data.poster_path)}}
                  style={styles.image}
                  testID={`movie-details-poster-${data.id}`}
                />
                <VStack flex={1} ml={6} justifyContent="space-between">
                  <Text color="gray.dark" style={styles.releaseDate}>
                    {data.release_date}
                  </Text>
                  <Text color="gray.dark" style={styles.rating}>
                    {data.vote_average.toFixed(1)} / 10
                  </Text>
                  <Button bgColor="textBg" style={styles.favoriteButton}>
                    <Text color="white" style={styles.favoriteButtonText}>
                      Add to Favorite
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
