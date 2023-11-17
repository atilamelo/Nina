import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoInformation = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Ainda não há informações adicionadas
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#A1A4AF',
        textAlign: 'left',
        fontFamily: 'Inter',
        fontSize: 16,
    },
});

export default NoInformation;
