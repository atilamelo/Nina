// Creator: Átila Melo
// Date: 28/06/2023
// Description: Statistics Screen that will show the statistics of the user based on dreams

import React from 'react';
import styled from 'styled-components/native';
import Background from '@components/Background';
import HomeHeader from '@components/Headers/HomeHeader';
import GraphicBarContent from '@components/StatisticsComponents/GraphicBarContent';
import GraphicPieContent from '@components/StatisticsComponents/GraphicPieContent';
import GraphicCloudContent from '@components/StatisticsComponents/GraphicCloudContent';
import { ScrollView } from 'react-native';
import { GraficProvider } from '@contexts/GraphicBarContext';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const tags = [
  { value: 'jQuery', count: 25 },
  { value: 'MongoDB', count: 18 },
  { value: 'Nodejs', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'teste', count: 28 },
  { value: 'testando.js', count: 25 },
];

const feelings = [
  { value: 'jQuery', count: 25 },
  { value: 'MongoDB', count: 18 },
  { value: 'Nodejs', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'teste', count: 28 },
  { value: 'testando.js', count: 25 },
];

const tagColor = {
  luminosity: 'light',
  hue: '#443681',
}

const feelingsColor = {
  luminosity: 'light',
  hue: '#9F238E',
}

const StatisticsScreen = ({ navigation }) => {
  return (
    // Provedor do contexto gráfico que envolve a tela
    <GraficProvider>
      <Background>

        <HomeHeader
          title={"Estatísticas"}
        />

        <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
          <Container>
            <GraphicCloudContent
              Titulo="Tags mais usadas"
              data={tags}
              options={tagColor}
            />

            <GraphicCloudContent
              Titulo="Sentimentos mais usados"
              data={feelings}
              options={feelingsColor}
            />

            <GraphicPieContent
              Titulo="Sonhos com Conexão com a Realidade"
              data={[
                {
                  name: 'Não',
                  porcentagem: 100,
                  color: '#9F238E',
                  legendFontColor: '#fff',
                  legendFontSize: 15,
                  legendFontFamily: 'Inter SemiBold',
                },
                {
                  name: 'Sim',
                  porcentagem: 80,
                  color: '#9464B1',
                  legendFontColor: '#fff',
                  legendFontSize: 15,
                  legendFontFamily: 'Inter SemiBold',
                },
              ]}
            />

            <GraphicPieContent
              Titulo="Sonhos com Recorrência"
              data={[
                {
                  name: 'Não',
                  porcentagem: 20,
                  color: '#443681',
                  legendFontColor: '#fff',
                  legendFontSize: 15,
                  legendFontFamily: 'Inter SemiBold',
                },
                {
                  name: 'Sim',
                  porcentagem: 30,
                  color: '#653483',
                  legendFontColor: '#fff',
                  legendFontSize: 15,
                  legendFontFamily: 'Inter SemiBold',
                },
              ]}
            />
          </Container>
        </ScrollView>
      </Background>
    </GraficProvider>
  );
};

export default StatisticsScreen;
