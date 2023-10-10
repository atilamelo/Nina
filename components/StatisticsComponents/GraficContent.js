import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Barra from '@components/Barra';
import GraficBar from '@components/StatisticsComponents/GraficBar';
import HeaderChart from '@components/StatisticsComponents/HeaderChart';

const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 15%;
`;

const Content = styled.View`
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

const ChartContent = styled.View`
  flex: 1;
  border-radius: 7px;
  overflow: hidden;
`;

const GraficContent = ({ Titulo }) => {
  
  const { width } = Dimensions.get('window');
  // Calcula a largura do conteúdo com base na largura da tela
  const contentSize = width * 0.91;
  const margin = '6%';

  return (
    <Container>
      <Content style={{ width: contentSize }}>

        <Texto>{Titulo}</Texto>

        <Barra marginTop={margin} />

        <HeaderChart/>

        <ChartContent>
          <GraficBar
            contentWidth={contentSize}
            labels={['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5']}
            datasets={[
              {
                data: [2, 3, 4, 6, 8],
                colors: [
                  (opacity = 1) => `#9F238E`,
                  (opacity = 1) => `#9F238E`,
                  (opacity = 1) => `#9F238E`,
                  (opacity = 1) => `#9F238E`,
                  (opacity = 1) => `#9F238E`,
                ],
              },
            ]}
          />
        </ChartContent>
      </Content>
    </Container>
  );
};

export default GraficContent;
