import React from 'react';
import {waitFor} from '@testing-library/react-native';

import {DiscoveryScreen} from '.';
import {renderWithProviders} from '../../test/render';
import {mockedMovies} from '../../../__mocks__/query.mock';

const mockResponse = {
  loadedMovies: mockedMovies,
  loadMore: jest.fn(),
  hasMore: true,
  isLoading: false,
  isError: false,
};
jest.mock('../../hooks/useMovies', () => {
  return {
    useMovies: () => mockResponse,
  };
});

test('Render discovery screen correctly', async () => {
  const screen = renderWithProviders(<DiscoveryScreen />);
  const element = await screen.findByTestId('Pop-Discovery');
  expect(element).toBeDefined();

  await waitFor(async () => {
    const movie = await screen.findByTestId('movie-image-466420');
    expect(movie).toBeDefined();
  });
});
