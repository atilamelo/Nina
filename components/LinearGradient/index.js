import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LinearGradientBackground = ({ children }) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#653483', '#1A1F32']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 650, marginTop: -insets.top }}
            />
            {children}
        </View>
    );
};

export default LinearGradientBackground;
