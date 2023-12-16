import {StyleSheet} from 'react-native';
import {scale} from '../../utils/scale';

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
  },
  image: {
    width: scale(115),
    height: scale(175),
    resizeMode: 'cover',
  },
  releaseDate: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 24,
  },
  rating: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '700',
  },
  favoriteButton: {
    paddingVertical: 16,
  },
  favoriteButtonText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
  overview: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '500',
  },
});
