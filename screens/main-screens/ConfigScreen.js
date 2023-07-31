/* Creator: Carla Chicareli
 * Data: 30/06/2023
 * Description: Configurations screen of the App
 */

import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from 'react-native';
//import * as Font from 'expo-font';


// Vou Ignorar as fontes por enquanto
// const loadFonts = async () => {
//   await Font.loadAsync({
//     'Inter-Medium': require('./assets/fonts/inter/Inter-Medium.ttf'),
//     'Montserrat-Light': require('./assets/fonts/montserrat/Montserrat-Light.ttf'),
//     'Montserrat-SemiBold': require('./assets/fonts/montserrat/Montserrat-SemiBold.ttf'),
//   });
// };


const ConfigScreen = ({ navigation }) => {

    // useEffect(() => {
    //   loadFonts(); // Chame a função para carregar as fontes assim que o componente for montado
    // }, []);

    const loginButton = () => { //trocar para avancarButton
        // Lógica para realizar o login com email e senha
        // Exemplo: realizar uma requisição para a API de autenticação
        // Se o login for bem-sucedido, navegar para a tela de cadastro
        navigation.navigate('Login  ');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            windowSoftInputMode="adjustResize"
        >
            <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">

                <View style={styles.entrarConta}>
                    <Text style={[styles.texto, { fontWeight: 'bold' }]}>Configurações</Text>
                </View>

                <StatusBar style="auto" />
                <TouchableOpacity onPress={loginButton}>
                    <View style={styles.barra}>
                        <Text placeholderTextColor="#FFFFFF" style={[styles.input, { fontWeight: 'bold' }]}>Entrar com uma conta</Text>
                        <Image source={require('../../assets/Config/Entrar.png')} style={styles.icones} />
                    </View>
                </TouchableOpacity>

                <View style={styles.barra}>
                    <Text placeholderTextColor="#FFFFFF" style={[styles.input, { fontWeight: 'bold' }]}>Mudar senha</Text>
                    <Image source={require('../../assets/Config/bloquear.png')} style={styles.icones} />
                </View>

                <View style={styles.barra}>
                    <Text placeholderTextColor="#FFFFFF" style={[styles.input, { fontWeight: 'bold' }]}>Notificações</Text>
                    <Image source={require('../../assets/Config/notificacao.png')} style={styles.icones} />
                </View>

                <View style={styles.barra}>
                    <Text placeholderTextColor="#FFFFFF" style={[styles.input, { fontWeight: 'bold' }]}>Backup em nuvem</Text>
                    <Image source={require('../../assets/Config/backup.png')} style={styles.icones} />
                </View>

                <View style={styles.barra}>
                    <Text placeholderTextColor="#FFFFFF" style={[styles.input, { fontWeight: 'bold' }]}>Termos & Condições</Text>
                    <Image source={require('../../assets/Config/termos.png')} style={styles.icones} />
                </View>

                <View style={styles.barra}>
                    <Text placeholderTextColor="#FFFFFF" style={[styles.input, { fontWeight: 'bold' }]}>Fale conosco</Text>
                    <Image source={require('../../assets/Config/telefone.png')} style={styles.icones} />
                </View>

                <TouchableOpacity onPress={loginButton}>
                    <View style={styles.barra}>
                        <Text placeholderTextColor="#FFFFFF" style={[styles.input, { fontWeight: 'bold' }]}>Sair</Text>
                        <Image source={require('../../assets/Config/sair.png')} style={styles.icones} />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1F32',
    },
    content: {
        flexGrow: 1,
        paddingTop: '17%', // Distancia dos elementos do topo
    },

    texto: {
        color: 'white',
        //fontFamily: 'Inter-Medium',
        fontSize: 16,
        alignSelf: 'flex-start',
        marginRight: '48%',
    },
    icones: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: '8%',
        alignSelf: 'flex-start',
        paddingTop: '12%',
    },
    entrarConta: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: '28%',
        marginBottom: '10%', // Distancia  entarConta da caixa
    },
    barra: {
        flexDirection: 'row',
        width: '87%',
        height: 54,
        backgroundColor: '#2B314C',
        borderRadius: 13,
        padding: 10,
        marginBottom: 30, //Distancia entre email e senha
        alignSelf: 'center',
    },
    input: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 15,
        paddingTop: '2%',
        marginLeft: '5%',
        //fontFamily: 'Montserrat-SemiBold',
    },
});

export default ConfigScreen;
