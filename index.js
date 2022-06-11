/**
 * @format
 */
 import * as React from 'react';
import {AppRegistry} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from './src/App';
import {name as appName} from './app.json';
import Ionicons from 'react-native-vector-icons/Ionicons';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFFFFF',
  },
};

export default function Main() {
    return (
      <PaperProvider 
        theme={theme}
        settings={{
          icon: props => <Ionicons {...props} />
        }}
      >
        <App />
      </PaperProvider>
    );
  }
  
  AppRegistry.registerComponent(appName, () => Main);