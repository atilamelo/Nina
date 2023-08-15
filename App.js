/* Creator: Átila Melo
 * Data: 28/06/2023
 * Description: Main App Screen
 */

import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Tabs from './components/navigation/Tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen  from 'expo-splash-screen';

const Stack = createStackNavigator();

const App = () => {
    const [fontsLoaded] = useFonts({
        "Inter Bold": require("./assets/fonts/Inter-Bold.ttf"),
        "Inter Black": require("./assets/fonts/Inter-Black.ttf"),
        "Inter Regular": require("./assets/fonts/Inter-Regular.ttf"),
    });

    useEffect(() => {
        async function prepare(){
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    if(!fontsLoaded) {
        return undefined;
    }else{
        SplashScreen.hideAsync();
    }

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
