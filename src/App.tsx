import React from 'react';
import { CountriesProvider } from './contexts/CountriesContext';

import Routes from './routes';

const App = () => {
  return (
    <CountriesProvider>
      <Routes />
    </CountriesProvider>
  );
};

export default App;
