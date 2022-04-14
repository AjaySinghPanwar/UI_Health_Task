import 'react-native-gesture-handler';
import React from 'react';
import AppContainer from './src/container/AppContainer';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  );
};

export default App;
