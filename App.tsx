import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {theme} from './src/utils/theme';
import AppNavigator from './src/navigation/AppNavigator';

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
    <NativeBaseProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}

export default App;
