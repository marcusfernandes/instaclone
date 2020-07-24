import React from 'react';
import {View} from 'react-native';
import {StatusBar} from 'react-native';

// import { Container } from './styles';
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <Routes />
    </>
  );
};

export default App;
