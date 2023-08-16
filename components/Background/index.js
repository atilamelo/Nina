import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Background = ({ children }) => {
    return (
            <View style={styles.background}>
                <LinearGradient
                    colors={['#36204E', '#1A1F32']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.2 }}
                    style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
                >
                { children }
                </LinearGradient>
            </View>
    );
}

const styles = StyleSheet.create({
    
	background: {
        flex: 1,
        backgroundColor: '#1A1F32',
    }
});

export default Background;