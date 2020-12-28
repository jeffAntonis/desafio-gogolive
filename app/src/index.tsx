import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import Routes from './routes';

console.disableYellowBox = true;

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <Routes />
    </>
  );
};

export default App;
