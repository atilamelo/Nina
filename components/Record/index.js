import React from 'react';
import {TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import UpperDescription from '@components/Record/UpperDescription';

const Record = (onPress) => {
  return (
    <>
        <LowerRectangleContainer>
        <TouchableEllipse>
            <Image source={require('@assets/icons/micPreenchido.png')} style={{ width: 21, height: 30, tintColor: 'white' }} />
        </TouchableEllipse>
        <Texto>Segure o Microfone para falar</Texto>
        </LowerRectangleContainer>

        <UpperRectangleContainer>
            <UpperDescription/>
        </UpperRectangleContainer>
    </>
  );
};

const TouchableEllipse = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: #9F238E;
  border-radius: 30px;
  align-self: center;
  margin-top: 65px;
  justify-content: center;
  align-items: center;
  margin-bottom: 22px;
`;

const UpperRectangleContainer = styled.View`
  width: 100%;
  height: 59px;
  background: #222840;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  margin-bottom: 51%;
`;

const LowerRectangleContainer = styled.View`
  width: 100%;
  height: 215px;
  background: #2B314C;
  position: absolute;
  bottom: 0;
`;

const Texto = styled.Text`
    color: #D9D9D9;
    text-align: center;
    font-family: "Inter Regular";
    font-size: 13px;
`;

const Descricao = styled.Text`
    color: #D9D9D9;
    font-family: "Inter Regular";
    font-size: 17px;
`;

const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 4%;
    margin-left: 6%;
    margin-right: 35%;
`;

export default Record;
