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


const LoginScreen = ({ navigation }) => {

  // useEffect(() => {
  //   loadFonts(); // Chame a função para carregar as fontes assim que o componente for montado
  // }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const avancarButton = () => { //trocar para avancarButton
    // Lógica para realizar o login com email e senha
    // Exemplo: realizar uma requisição para a API de autenticação
    // Se o login for bem-sucedido, navegar para a tela de cadastro
    navigation.navigate('Cadastro');
  };

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      windowSoftInputMode="adjustResize"
    >
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.entrarConta}>
          <Image source={require('../assets/Login/Voltar.png')} style={styles.imagem} />
          <Text style={[styles.texto, { fontWeight: 'bold' }]}>Entrar com uma conta</Text>
        </View> 
        <StatusBar style="auto" />
        <View style={styles.barraEmail}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#FFFFFF"
            style={styles.input}
          />
        </View>
        <View style={styles.barraSenha}>
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#FFFFFF"
            style={styles.input}
            secureTextEntry={!isPasswordVisible} // Usar secureTextEntry com base no estado
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.visualizar}>
            <Image
              source={
                isPasswordVisible
                  ? require('../assets/Cadastro/Esconder.png')
                  : require('../assets/Cadastro/Ver.png')
              }
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.esqueceuSenha}>Esqueceu a senha?</Text>
        <View style={styles.avancarButtonContainer}>
          <TouchableOpacity style={styles.avancarButton}>
            <Text style={[styles.avancarButtonText, { fontWeight: 'bold' }]}>AVANÇAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cadastro}>
          <Text style={styles.naoTemConta}>Ainda não tem uma conta?</Text>
          <TouchableOpacity onPress={avancarButton}>
            <Text style={[styles.inscrevase, { fontWeight: 'bold' }]}>Inscreva-se</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.loginCom}> 
          <Text style={[styles.login, { fontWeight: 'bold' }]}>Fazer Login com</Text>
          <View style={styles.entrar}> 
            <Image source={require('../assets/Login/Google.png')} style={styles.google} />
            <Image source={require('../assets/Login/Face.png')} style={styles.face} />
            <Image source={require('../assets/Login/Twitter.png')} style={styles.twitter} />
          </View>
        </View>
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
      marginRight: '8%',
    },
    imagem: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
      marginRight: '8%',
      alignSelf: 'flex-start',
    },
    entrarConta: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginRight: '28%',
      marginBottom: '27%', // Distancia  entarConta da caixa de email
    },
    barraEmail: {
      width: '87%',
      height: 54,
      backgroundColor: '#2B314C',
      borderRadius: 13,
      padding: 10,
      marginBottom: 30, //Distancia entre email e senha
      alignSelf: 'center',
    },
    barraSenha: {
      width: '87%',
      height: 54,
      backgroundColor: '#2B314C',
      borderRadius: 13,
      padding: 10,
      alignSelf: 'center',
      flexDirection: 'row',
    },
    input: {
      flex: 1,
      color: '#FFFFFF',
      fontSize: 14,
      //fontFamily: 'Montserrat-SemiBold',
    },
    esqueceuSenha: {
      color: '#D9D9D9',
      //fontFamily: 'Montserrat-Light',
      fontSize: 13,
      paddingTop: '5%',
      alignSelf: 'flex-start',
      marginLeft: '7%',
    },
    avancarButtonContainer: {
      width: '100%',
      alignItems: 'center',
      marginTop: 50,
    },
    avancarButton: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: 'white',
      paddingVertical: 10,
      paddingHorizontal: 80,
      borderRadius: 10,
    },
    avancarButtonText: {
      color: 'white',
      //fontFamily: 'Montserrat-SemiBold',
      fontSize: 15,
    },
    naoTemConta: {
      color: '#D9D9D9',
      //fontFamily: 'Montserrat-Light',
      fontSize: 13,
      paddingTop: '13%',
      marginRight: '1%',
      alignSelf: 'flex-start',
      marginLeft: '7%',
    },
    inscrevase: {
      color: '#D9D9D9',
      //fontFamily: 'Montserrat-SemiBold',
      fontSize: 13,
      paddingTop: '13%',
    },
    cadastro: {
      flexDirection: 'row',
    },
    entrar: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    loginCom: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    login: {
      color: '#FFFFFF',
      fontSize: 16,
      paddingTop: '13%',
      //fontFamily: 'Montserrat-SemiBold'
    },
    
    google: {
      width: 40,
      height: 40,
      resizeMode: 'contain',
      marginRight: '8%',
      marginTop: '13%'
    },
    face: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
      marginRight: '8%',
      marginTop: '13%'
    },
    twitter: {
      width: 48,
      height: 48,
      resizeMode: 'contain',
      marginTop: '13%'
    },
    visualizar: {
      marginTop: '2.5%',
      marginRight: '3%',
    },
  });

export default LoginScreen;
