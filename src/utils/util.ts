import Config from 'react-native-config';

export const getMoviePosterPath = (posterPath: string) =>
  `${Config.IMAGE_API_ROOT}${posterPath}`;
