import React from 'react';
import Providers from '@contexts/index';
import Routes from '@src/routes';

function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}
export default App;
