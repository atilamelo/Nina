import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ConfigScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Configurações Screen</Text>
        </View>
    );
}

export default ConfigScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A1F32'
    }
})