import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login/Login';
import CadastroScreen from './Cadastro/Cadastro';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Ocultar o cabeçalho na tela de login
        />
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{ headerShown: false }} // Ocultar o cabeçalho na tela de cadastro
        />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style='light' backgroundColor = 'transparent'/>
    </>
  );
};

export default AppNavigator;
