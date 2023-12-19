import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import storage from '../store/store';

const ASYNC_KEY = 'FAVORITE-MOVIES';

type Favorites = Record<number, boolean>;
type FavoriteContexType = {
  addFavorite?: (id: number) => void;
  removeFavorite?: (id: number) => void;
  isFavorite?: (id: number) => boolean;
};

export const FavoriteContext = createContext<FavoriteContexType>({});

type ProviderProp = PropsWithChildren;

export function FavoriteContextProvider({children}: ProviderProp) {
  const [favorites, setFavorites] = useState<Favorites>({});

  useEffect(() => {
    storage
      .load({
        key: ASYNC_KEY,
      })
      .then((value: Favorites) => {
        setFavorites(value);
      });
  }, []);

  const saveToStorage = useCallback((data: Favorites) => {
    storage.save({
      key: ASYNC_KEY,
      data,
    });
  }, []);

  const addFavorite = useCallback(
    (id: number) => {
      const newFavorites = {
        ...favorites,
        [id]: true,
      };
      setFavorites(newFavorites);
      setTimeout(() => saveToStorage(newFavorites), 0);
    },
    [setFavorites, saveToStorage, favorites],
  );

  const removeFavorite = useCallback(
    (id: number) => {
      const newFavorites = {
        ...favorites,
        [id]: false,
      };
      setFavorites(newFavorites);
      setTimeout(() => saveToStorage(newFavorites), 0);
    },
    [setFavorites, saveToStorage, favorites],
  );

  const isFavorite = useCallback((id: number) => !!favorites[id], [favorites]);

  return (
    <FavoriteContext.Provider value={{addFavorite, removeFavorite, isFavorite}}>
      {children}
    </FavoriteContext.Provider>
  );
}
