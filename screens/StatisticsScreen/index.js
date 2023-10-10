// Creator: Átila Melo
// Date: 28/06/2023
// Description: Statistics Screen that will show the statistics of the user based on dreams

import React from 'react';
import styled from 'styled-components/native';
import Background from '@components/Background';
import DrawerHeader from '@components/Headers/DrawerHeader';
import GraficContent from '@components/StatisticsComponents/GraficContent';
import { ScrollView } from 'react-native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StatisticsScreen = ({ navigation }) => {
  return (
    <Background>
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        <DrawerHeader />
        <Container>
          <GraficContent
            Titulo="Sonhos Registrados por Semana"
          />
        </Container>
      </ScrollView>
    </Background>
  );
};

export default StatisticsScreen;
