import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import Google from '../../assets/Config/Google.png';

const LoginGoogle = ({ label, iconSource, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <GoogleLogin>
                <GoogleIcon source={Google} />
                <Texto>Entrar com o Google</Texto>
            </GoogleLogin>
        </TouchableOpacity>
    );
};

const GoogleLogin = styled.View`
  width: 330px;
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

export default LoginGoogle;

