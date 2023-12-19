import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {theme} from './src/utils/theme';
import AppNavigator from './src/navigation/AppNavigator';
import {FavoriteContextProvider} from './src/context/FavoriteContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 10 * 60 * 1000, // 10 mins
    },
  },
});

function App(): React.JSX.Element {
  return (
    <FavoriteContextProvider>
      <NativeBaseProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AppNavigator />
        </QueryClientProvider>
      </NativeBaseProvider>
    </FavoriteContextProvider>
  );
}

export default App;
