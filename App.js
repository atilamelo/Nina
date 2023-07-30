import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './ navigation/Tabs';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
      <StatusBar style='light' backgroundColor='transparent' />
    </>
  );
};


export default App;