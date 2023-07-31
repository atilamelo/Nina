/* Creator: Átila Melo
 * Data: 28/06/2023
 * Description: Main App Screen
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './screens/login/Login';
import CadastroScreen from './screens/cadastro/Cadastro';
import ConfigScreen from './screens/main-screens/ConfigScreen';
import Tabs from './components/navigation/Tabs';

const Stack = createStackNavigator();

const App = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Tabs"
                        component={Tabs}
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
            <StatusBar style='light' backgroundColor='transparent' />
        </>
    );
};

export default App;
