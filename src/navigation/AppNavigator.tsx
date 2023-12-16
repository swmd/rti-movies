import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {DiscoveryScreen} from '../screens/Discovery';

export type AppStackParamList = {
  Discovery: undefined;
  Details: {
    movieId: number;
  };
};

const Stack = createStackNavigator<AppStackParamList>();

export type DetailsScreenRouteProp = RouteProp<AppStackParamList, 'Details'>;

const options = {
  headerShown: false,
  contentStyle: {
    backgroundColor: 'black',
  },
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options} initialRouteName="Discovery">
        <Stack.Screen name="Discovery" component={DiscoveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
