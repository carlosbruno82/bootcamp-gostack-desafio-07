import React from 'react';

import Routes from './src/routes';
import Header from './src/components/Header/index';

export default function App() {
  return (
    <Header>
      <Routes />
    </Header>
  );
}
