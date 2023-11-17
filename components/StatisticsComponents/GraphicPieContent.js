import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Barra from '@components/Barra';
import GraphicPie from '@components/StatisticsComponents/GraphicPie';
import HeaderChart from '@components/StatisticsComponents/HeaderChart';
import NoInformation from '@components/StatisticsComponents/NoInformation';

const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 7%;
`;

const Content = styled.View`
  aspect-ratio: 1;
  background-color: #222840;
  border-radius: 7px;
  align-items: center;
`;

const Texto = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Inter SemiBold';
  margin-top: 6%;
  width: 87%;
  margin-left: 6%;
`;

const ChartContent = styled.View`
  flex: 1;
  border-radius: 7px;
  overflow: hidden;
`;

const GraphicPieContent = ({ Titulo, data }) => {

  const { width } = Dimensions.get('window');
  // Calcula a largura do conteúdo com base na largura da tela
  const contentSize = width * 0.91;
  const margin = '6%';
  
  console.log("Data Length:", data && data.length);
  console.log(data)
  return (
    <Container>

      <Content style={{ width: contentSize }}>

        <Texto>{Titulo}</Texto>
        {data[0].porcentagem > 0 || data[1].porcentagem > 0 ? (
          <ChartContent>
            <GraphicPie
              contentWidth={contentSize}
              data={data}
            />
          </ChartContent>
        ) : (
          <NoInformation />
        )}
      </Content>

    </Container>
  );
};

export default GraphicPieContent;
