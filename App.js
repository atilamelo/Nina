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
import { SafeAreaView } from 'react-native-safe-area-context';
import Background from './components/Background/Background';

// fonts
import { useFonts } from 'expo-font';
import AppLoading  from 'expo-app-loading';

const Stack = createStackNavigator();

const App = () => {
    let [fontsLoaded] = useFonts({
        "Inter Bold": require("./assets/fonts/Inter-Bold.ttf"),
        // "Inter Black": require("./assets/fonts/Inter Black.ttf"),
    });

    if(!fontsLoaded) return (<AppLoading />);

    return (
        <SafeAreaView style={{ flex: 1 }}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Tabs"
                            component={Tabs}
                            options={{ headerShown: false }} // Ocultar o cabeçalho
                        />
                    </Stack.Navigator>
                </NavigationContainer>
                <StatusBar style='light' backgroundColor='#2A0A41' />
        </SafeAreaView>
    );
};

export default App;
