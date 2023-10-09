import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Barra from '@components/Barra';
import GraficBar from '@components/StatisticsComponents/GraficBar';

const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 15%;
`;

const Content = styled.View`
  width: 80%;
  aspect-ratio: 1;
  background-color: #222840;
  border-radius: 7px;
  align-items: center;
`;

const Texto = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Inter SemiBold';
  margin-top: 6%;
  width: 87%;
  text-align: center;
`;

const GraficContent = ({ Titulo }) => {
    const { width } = Dimensions.get('window');
    const contentSize = width * 0.85;  // 80% do tamanho da largura da tela
    const margin = '6%';

    return (
        <Container>
            <Content style={{ width: contentSize }}>
                <Texto>{Titulo}</Texto>
                <Barra marginTop={margin}/>
                <GraficBar/>
            </Content>
        </Container>
    );
};

export default GraficContent;
