import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from '../../../components/Background/Background';

const WriteScreen = ({ navigation }) => {
    return (
        <Background>
            <View style={styles.container}>
                <Text>Tela de escrita</Text>
            </View>
        </Background>
    );
}

export default WriteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
