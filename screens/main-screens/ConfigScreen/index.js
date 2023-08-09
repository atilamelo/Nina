/* Creator: Carla Chicareli
 * Data: 30/06/2023
 * Description: Configurations screen of the App
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ConfigItem } from '../../../components/ConfigItem';
import { Barra } from '../../../components/Barra/Barra';
import { TopBar } from '../../../components/TopBar';

const ConfigScreen = ({ navigation }) => {
    const navigateTo = ({ screen_name }) => {
        navigation.navigate(screen_name);
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
            
                <View style={styles.header}>
                    <Text style={styles.headerText}>Entre para armazenar seus dados na nuvem!</Text>
                </View>
                <Barra/>
                <StatusBar style="auto" />

                <ConfigItem label="Notificações" iconSource={require('../../../assets/Config/notificacao.png')} onPress={() => { }} />
                <ConfigItem label="Backup em nuvem" iconSource={require('../../../assets/Config/backup.png')} onPress={() => { }} />
                <ConfigItem label="Termos & Condições" iconSource={require('../../../assets/Config/termos.png')} onPress={() => { }} />
                <ConfigItem label="Política de privacidade" iconSource={require('../../../assets/Config/termos.png')} onPress={() => { }} />
                <ConfigItem label="Fale conosco" iconSource={require('../../../assets/Config/telefone.png')} onPress={() => { }} />
                <ConfigItem label="Sair" iconSource={require('../../../assets/Config/sair.png')} onPress={() => { }} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1F32',
    },
    content: {
        flexGrow: 1,
        paddingTop: '17%', // Distance from the top elements
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '10%', // Distance from the top of the box
    },
    headerText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },
});

export default ConfigScreen;
