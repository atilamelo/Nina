import React from 'react';
import { StyleSheet, View } from 'react-native';

import LinearGradient from '../LinearGradient';

const Background = ({ children }) => {
    return (
        <View style={styles.background}>
            <LinearGradient>
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