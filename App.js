/* Creator: Átila Melo
 * Data: 28/06/2023
 * Description: Main App Screen
 */

import React from 'react';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { RealmProvider } from '@databases/realm';
import MainStack from '@navigators/MainStack';
import * as SplashScreen  from 'expo-splash-screen';

const App = () => {
    const [fontsLoaded] = useFonts({
        "Inter Bold": require("@assets/fonts/Inter-Bold.ttf"),
        "Inter Black": require("@assets/fonts/Inter-Black.ttf"),
        "Inter Regular": require("@assets/fonts/Inter-Regular.ttf"),
        "Inter Medium": require("@assets/fonts/Inter-Medium.ttf"),
        "Inter SemiBold": require("@assets/fonts/Inter-SemiBold.ttf"),
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
        <RealmProvider>
            <SafeAreaView style={{ flex: 1 }}>
                    <MainStack/>
                    <StatusBar style='light' backgroundColor='#111526' />
            </SafeAreaView>
        </RealmProvider>
    );
};

export default App;
