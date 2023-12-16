import {useQuery} from '@tanstack/react-query';
import {MovieService} from '../services/MovieService';

export const DETAIL_QUERY_KEY = 'MOVIE_DETAIL';

const useMovieDetail = (movieId: number) => {
  const {data, isLoading} = useQuery({
    queryKey: [DETAIL_QUERY_KEY, movieId],
    queryFn: () => MovieService.getMovieDetail(movieId),
  });

  return {
    data,
    isLoading,
  };
};

export default useMovieDetail;
