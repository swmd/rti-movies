import Config from 'react-native-config';
import {Movie} from '../utils/types';
import {axiosClient} from '../libs/api';

interface IPopularMoviesResponse {
  results: Movie[];
  page: number;
  total_pages: number;
}

const {MOVIE_API_KEY} = Config;

export const MovieService = {
  getPopularMovies: async (page: number) => {
    const response = await axiosClient.get<IPopularMoviesResponse>(
      `movie/popular?api_key=${MOVIE_API_KEY}&page=${page}`,
    );
    return {
      results: response.data.results || [],
      hasMore: page < response.data.total_pages,
    };
  },
  getMovieDetail: async (movieId: number) => {
    const response = await axiosClient.get<Movie>(
      `movie/${movieId}?api_key=${MOVIE_API_KEY}`,
    );
    return response.data;
  },
};
