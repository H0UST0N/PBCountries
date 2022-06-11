import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const stackRoutes = createStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      cardStyle: {
        backgroundColor: '#fff',
      },
      headerShown: false
    }}>

    <stackRoutes.Screen name="Home" component={Home} />

    <stackRoutes.Screen name="Details" component={Details} />

  </stackRoutes.Navigator>
);

export default AppRoutes;
