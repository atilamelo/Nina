import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import Google from '@assets/Config/Google.png';

const LoginGoogle = ({ setIsLogged }) => {

  const handleGoogleLogin = () => {
    setIsLogged(true);
  };
    return (
      <>
          <Header>
            <HeaderText>Entre para armazenar seus dados na nuvem!</HeaderText>
          </Header>
        <TouchableOpacity onPress={handleGoogleLogin}>
          <GoogleLogin>
              <GoogleIcon source={Google} />
              <Texto>Entrar com o Google</Texto>
          </GoogleLogin>
        </TouchableOpacity>
      </>
    );
};

const GoogleLogin = styled.View`
  width: 87%;
  height: 54px;
  margin: auto;
  background-color: #ececec;
  border-radius: 13px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3%;
`;

const GoogleIcon = styled.Image`
  resize-mode: contain;
  width: 25px;
  height: 25px;
  margin-left: 18px;
  border-radius: 13px;
  
`;

const Texto = styled.Text`
  font-family: "Inter Regular";
  text-align: center;
  font-size: 16px;
  margin-left: 23px;
  color: #000;
`;

const Header = styled.View`
  padding-horizontal: 20px;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10%;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-family: "Inter Bold";
  text-align: center;
  font-size: 17px;
  color: #fff;
`;

export default LoginGoogle;

