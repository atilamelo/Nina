/* Creator: Átila Melo
 * Data: 28/06/2023
 * Description: Main App Screen
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
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
                </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style='light' backgroundColor='transparent' />
        </>
    );
};

export default App;
