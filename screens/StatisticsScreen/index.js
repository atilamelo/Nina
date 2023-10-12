// Creator: Átila Melo
// Date: 28/06/2023
// Description: Statistics Screen that will show the statistics of the user based on dreams

import React from 'react';
import styled from 'styled-components/native';
import Background from '@components/Background';
import DrawerHeader from '@components/Headers/DrawerHeader';
import GraphicBarContent from '@components/StatisticsComponents/GraphicBarContent';
import GraphicPieContent from '@components/StatisticsComponents/GraphicPieContent';
import { ScrollView } from 'react-native';
import { GraficProvider } from '@contexts/GraphicBarContext';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StatisticsScreen = ({ navigation }) => {
  return (
    // Provedor do contexto gráfico que envolve a tela
    <GraficProvider>
      <Background>
        <DrawerHeader />
        <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
          <Container>
            <GraphicBarContent
              Titulo="Sonhos Registrados por Semana"
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

            <GraphicBarContent
              Titulo="Sonhos Por Categoria"
              labels={['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6']}
              datasets={[
                {
                  data: [4, 3, 9, 7, 3, 5],
                  colors: [
                    (opacity = 1) => `#653483`,
                    (opacity = 1) => `#653483`,
                    (opacity = 1) => `#653483`,
                    (opacity = 1) => `#653483`,
                    (opacity = 1) => `#653483`,
                    (opacity = 1) => `#653483`,
                  ],
                },
              ]}
            />

            <GraphicBarContent
              Titulo="Sonhos Por Nível de Lucidez"
              labels={['Nível 1', 'Nível 2', 'Nível 3', 'Nível 4', 'Nível 5']}
              datasets={[
                {
                  data: [4, 3, 1, 7, 1],
                  colors: [
                    (opacity = 1) => `#443681`,
                    (opacity = 1) => `#443681`,
                    (opacity = 1) => `#443681`,
                    (opacity = 1) => `#443681`,
                    (opacity = 1) => `#443681`,
                  ],
                },
              ]}
            />

            <GraphicBarContent
              Titulo="Sonhos Por Sentimento"
              labels={['Felicidade', 'Tristeza', 'Medo', 'Raiva', 'Ansiedade']}
              datasets={[
                {
                  data: [2, 4, 1, 3, 5],
                  colors: [
                    (opacity = 1) => `#9464B1`,
                    (opacity = 1) => `#9464B1`,
                    (opacity = 1) => `#9464B1`,
                    (opacity = 1) => `#9464B1`,
                    (opacity = 1) => `#9464B1`,
                  ],
                },
              ]}
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
