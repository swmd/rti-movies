import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {render} from '@testing-library/react-native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {theme} from '../utils/theme';

const queryClient = new QueryClient();
const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

export const renderWithProviders = (ui: React.ReactNode, options?: any) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const Providers = ({children}) => (
    <NativeBaseProvider theme={theme} initialWindowMetrics={inset}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>{children}</NavigationContainer>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return render(ui, {wrapper: Providers, ...options});
};
