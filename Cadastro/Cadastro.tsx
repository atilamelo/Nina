import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

//import * as Font from 'expo-font';

// Vou Ignorar as fontes por enquanto
// const loadFonts = async () => {
//   await Font.loadAsync({
//     'Inter-Medium': require('./assets/fonts/inter/Inter-Medium.ttf'),
//     'Montserrat-Light': require('./assets/fonts/montserrat/Montserrat-Light.ttf'),
//     'Montserrat-SemiBold': require('./assets/fonts/montserrat/Montserrat-SemiBold.ttf'),
//   });
// };

const CadastroScreen = ({ navigation }) => {

  // useEffect(() => {
  //   loadFonts(); // Chame a função para carregar as fontes assim que o componente for montado
  // }, []);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reescrita, setReescrita] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const avancarButton = () => { 
    
    if (!emailIsValid(email)) {
      alert('Por favor, digite um email válido.');
      return;
    }

    // Verificação da senha
    if (!passwordIsValid(password)) {
      alert(
        'A senha deve conter ao menos 8 caracteres, incluindo letras maiúsculas, letras minúsculas e números.'
      );
      return;
    }

    // Verificação da reescrita da senha
    if (password !== reescrita) {
      alert('As senhas digitadas não coincidem. Por favor, tente novamente.');
      return;
    }

    navigation.navigate('Login');
  };

  // Função para verificar se o email é válido
  const emailIsValid = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  // Função para verificar se a senha é válida
  const passwordIsValid = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return passwordRegex.test(password);
  };

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const [isReescrevaVisible, setReescrevaVisible] = useState(false);

  const toggleReescrevaVisibility = () => {
    setReescrevaVisible((prevVisible) => !prevVisible);
  };

  return (
    <>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.entrarConta}>
          <Image source={require('../assets/Cadastro/Voltar.png')} style={styles.imagem} />
          <Text style={[styles.texto, { fontWeight: 'bold' }]}>Cadastrar uma conta</Text>
        </View> 
        <StatusBar style="auto" />
        <View style={styles.barraNome}>
          <TextInput
            placeholder="Nome"
            placeholderTextColor="#FFFFFF"
            style={styles.input}
          />
        </View>
        <View style={styles.barraEmail}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#FFFFFF"
            style={styles.input}
            value={email} 
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.barraSenha}>
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#FFFFFF"
            style={styles.input}
            secureTextEntry={!isPasswordVisible} // Usar secureTextEntry com base no estado
            value={password}
            onChangeText={(text) => setPassword(text)}
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
        <View style={styles.barraReescrever}>
        <TextInput
            placeholder="Reescreva sua senha"
            placeholderTextColor="#FFFFFF"
            style={styles.input}
            secureTextEntry={!isReescrevaVisible} // Usar secureTextEntry com base no estado
            value={reescrita}
            onChangeText={(text) => setReescrita(text)}
          />
          <TouchableOpacity onPress={toggleReescrevaVisibility} style={styles.visualizar}>
            <Image
              source={
                isReescrevaVisible
                  ? require('../assets/Cadastro/Esconder.png')
                  : require('../assets/Cadastro/Ver.png')
              }
            />
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          
          <BouncyCheckbox
            size={25}
            fillColor="#ffffff"
            unfillColor="transparent"
            iconStyle={{ borderColor: "white", borderRadius: 0 }}
            innerIconStyle={{ borderWidth: 3, borderRadius: 0 }}
            onPress={(isChecked: boolean) => {}}
            checkIconImageSource={require('../assets/Cadastro/Check_Icon.png')}
          />
          <Text style={styles.termos}>Aceitar </Text>
          <Text style={[styles.termos, { fontWeight: 'bold' }]}>Termos & Condições</Text>
        </View>
        <View style={styles.avancarButtonContainer}>
          <TouchableOpacity style={styles.avancarButton} onPress={avancarButton}>
            <Text style={[styles.avancarButtonText, { fontWeight: 'bold' }]}>AVANÇAR</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.cadCom}> 
          <Text style={[styles.cad, { fontWeight: 'bold' }]}>Cadastrar com</Text>
          <View style={styles.entrar}> 
            <Image source={require('../assets/Cadastro/Google.png')} style={styles.google} />
            <Image source={require('../assets/Cadastro/Face.png')} style={styles.face} />
            <Image source={require('../assets/Cadastro/Twitter.png')} style={styles.twitter} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    <StatusBar style='light' backgroundColor = 'transparent'/>
    </>
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
      marginRight: '13%',
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
      marginBottom: '15%', // Distancia  entrarConta das caixas
    },
    barraNome: {
        width: '87%',
        height: 54,
        backgroundColor: '#2B314C',
        borderRadius: 13,
        padding: 10,
        marginBottom: 30, //Distancia entre as caixas
        alignSelf: 'center',
      },
    barraEmail: {
      width: '87%',
      height: 54,
      backgroundColor: '#2B314C',
      borderRadius: 13,
      padding: 10,
      marginBottom: 30, 
      alignSelf: 'center',
    },
    barraSenha: {
      width: '87%',
      height: 54,
      backgroundColor: '#2B314C',
      borderRadius: 13,
      padding: 10,
      alignSelf: 'center',
      marginBottom: 30,
      flexDirection: 'row',
    },
    barraReescrever: {
        flexDirection: 'row',
        width: '87%',
        height: 54,
        backgroundColor: '#2B314C',
        borderRadius: 13,
        padding: 10,
        alignSelf: 'center',
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
      marginTop: '13%',
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
    checkboxContainer: {
      flexDirection: 'row',
      marginTop: '13%',
      marginLeft: '7%',
    },
    cadCom: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    cad: {
      color: '#FFFFFF',
      fontSize: 16,
      paddingTop: '9%',
      //fontFamily: 'Montserrat-SemiBold'
    },
    google: {
      width: 40,
      height: 40,
      resizeMode: 'contain',
      marginRight: '8%',
      marginTop: '9%'
    },
    face: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
      marginRight: '8%',
      marginTop: '9%'
    },
    twitter: {
      width: 48,
      height: 48,
      resizeMode: 'contain',
      marginTop: '9%'
    },
    visualizar: {
      marginTop: '2.5%',
      marginRight: '3%',
    },
    termos: {
      flexDirection: 'row',
      color: '#FFFFFF',
      fontSize: 15
    }
  });

  export default CadastroScreen;
