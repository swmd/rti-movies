import React from 'react';
import {RenderResult, waitFor, within} from '@testing-library/react-native';

import {DetailScreen} from './Detail';
import {renderWithProviders} from '../../test/render';
import {mockedMovies} from '../../../__mocks__/query.mock';

const mockResponse = {
  data: mockedMovies[0],
  isLoading: false,
};
jest.mock('../../hooks/useMovieDetail', () => {
  return {
    useMovieDetail: () => mockResponse,
  };
});

describe('Render movie detais', () => {
  let screen: RenderResult;
  beforeEach(() => {
    screen = renderWithProviders(<DetailScreen />);
  });

  it('should render component', async () => {
    await waitFor(async () => {
      const element = await screen.findByTestId('Movie-Details');
      expect(element).toBeDefined();
    });
  });

  it('should render title correctly', async () => {
    await waitFor(async () => {
      const {getByText} = within(await screen.findByTestId('Movie-Title'));
      expect(getByText('Killers of the Flower Moon')).toBeDefined();
    });
  });
  it('should render poster image correctly', async () => {
    await waitFor(async () => {
      const image = await screen.findByTestId('Movie-Poster-466420');
      expect(image).toBeDefined();
    });
  });
  it('should render release date correctly', async () => {
    await waitFor(async () => {
      const {getByText} = within(
        await screen.findByTestId('Movie-Release-Date'),
      );
      expect(getByText('2023-10-18')).toBeDefined();
    });
  });
  it('should render score correctly', async () => {
    await waitFor(async () => {
      const {getByText} = within(await screen.findByTestId('Movie-Score'));
      expect(getByText('7.6 / 10')).toBeDefined();
    });
  });
  it('should render favorite button correctly', async () => {
    await waitFor(async () => {
      const favoriteButton = await screen.findByTestId('Btn-Favorite');
      expect(favoriteButton).toBeDefined();
    });
  });
});
