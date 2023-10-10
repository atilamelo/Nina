// Creator: Átila Melo
// Date: 28/06/2023
// Description: Statistics Screen that will show the statistics of the user based on dreams

import React from 'react';
import styled from 'styled-components/native';
import Background from '@components/Background';
import DrawerHeader from '@components/Headers/DrawerHeader';
import GraficContent from '@components/StatisticsComponents/GraficContent';
import { ScrollView } from 'react-native';
import { GraficProvider } from '@contexts/GraficContext';

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
        <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
          <DrawerHeader />
          <Container>
            <GraficContent
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
          </Container>
        </ScrollView>
      </Background>
    </GraficProvider>
  );
};

export default StatisticsScreen;
