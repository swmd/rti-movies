import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {DiscoveryScreen} from '../screens/Discovery';
import {DetailScreen} from '../screens/Detail';

export type AppStackParamList = {
  Discovery: undefined;
  Details: {
    movieId: number;
  };
};

const Stack = createStackNavigator<AppStackParamList>();

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
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
