import {useQuery} from '@tanstack/react-query';
import {MovieService} from '../services/MovieService';
import {useEffect, useMemo, useState} from 'react';
import {Movie} from '../utils/types';

export const POP_QUERY_KEY = 'POP_MOVIES';

const useMovies = () => {
  const [page, setPage] = useState(1);
  const [moviesByPage, setMoviesByPage] = useState<Record<number, Movie[]>>({});
  const [hasMore, setHasMore] = useState(true);

  const {data, isLoading, isFetched, isError} = useQuery({
    queryKey: [POP_QUERY_KEY, page],
    queryFn: () => MovieService.getPopularMovies(page),
  });

  useEffect(() => {
    if (isFetched && data && !isError) {
      setMoviesByPage({...moviesByPage, [page]: data.results});
      setHasMore(data.hasMore);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetched, data, isError]);

  const loadedMovies = useMemo(() => {
    let list: Movie[] = [];
    for (let i = 1; i <= page; i++) {
      list = list.concat(moviesByPage[i] || []);
    }
    return list;
  }, [moviesByPage, page]);

  const loadMore = () => {
    if (!hasMore || isLoading || !loadedMovies.length) {
      return;
    }
    setPage(page + 1);
  };

  return {
    loadMore,
    loadedMovies,
    hasMore,
    isLoading,
    isError,
  };
};

export default useMovies;
