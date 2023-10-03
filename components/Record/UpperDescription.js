import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';

const UpperDescription = () => {
  return (
    <>
        <Content>
            <TouchableOpacity>
                <Image source={require('@assets/icons/Voltar.png')} style={{ width: 14, height: 24 }} />
            </TouchableOpacity>
            <Descricao>Descreva seu sonho</Descricao>
        </Content>
    </>
  );
};

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

export default UpperDescription;
