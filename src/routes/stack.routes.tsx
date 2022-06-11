import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { CountriesContext } from '../contexts/CountriesContext';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const stackRoutes = createStackNavigator<RootStackParamList>();


const AppRoutes: React.FC = () => {

  const { darkMode } = useContext(CountriesContext);
  return (
    <stackRoutes.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: darkMode ? '#202D36' : '#F6F6F6',
        },
        headerShown: false
      }}>

      <stackRoutes.Screen name="Home" component={Home} />

      <stackRoutes.Screen name="Details" component={Details} />

    </stackRoutes.Navigator>
  )
};

export default AppRoutes;
