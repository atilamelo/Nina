import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login/Login';
import CadastroScreen from './Cadastro/Cadastro';
import ConfigScreen from './Configuracoes/Configuracoes';
import { StatusBar } from 'expo-status-bar';
import Tabs from './ navigation/Tabs';
import { StatusBar } from 'expo-status-bar';

// Default home app 
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

const Stack = createStackNavigator();

// Login/Cadastro App Screen
const AppNavigator = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Configuracoes"
          component={ConfigScreen}
          options={{ headerShown: false }} // Ocultar o cabeçalho
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Ocultar o cabeçalho
        />
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style='light' backgroundColor = 'transparent'/>
    </>
  );
};

