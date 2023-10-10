import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { BarChart } from 'react-native-chart-kit';
import { useGraficContext } from '@contexts/GraficContext';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

// Componente GraficBar que renderiza um gráfico de barras
const GraficBar = ({ contentWidth, labels: propLabels, datasets: propDatasets }) => {

  // Obtém os dados do contexto usando o hook personalizado useGraficContext
  const { graficData } = useGraficContext();
  const screenWidth = Dimensions.get('window').width;

  // Utiliza os rótulos e conjuntos de dados fornecidos ou recupera do contexto se não fornecidos
  const labels = propLabels || graficData.labels;
  const datasets = propDatasets || graficData.datasets;

  // Configuração dos dados para o gráfico
  const data = {
    labels,     // Rótulos do eixo X (semanas)
    datasets,  // Rótulos do eixo Y (sonhos)
  };

  // Configuração visual do gráfico
  const chartConfig = {
    backgroundColor: 'transparent',
    backgroundGradientTo: 'white',
    backgroundGradientFromOpacity: 0,
    backgroundGradientFrom: 'white',
    backgroundGradientToOpacity: 0,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    barRadius: 5,
    propsForLabels: {
      fontFamily: 'Inter Regular',
      fontSize: '11px',
    },
  };

  // Calcula as dimensões do gráfico com base na largura do conteúdo e largura da tela
  const chartWidth = contentWidth * 0.999;
  const chartHeight = (chartWidth / screenWidth) * 235;

  // Renderiza o componente BarChart com as configurações e dados fornecidos
  return (
    <Container>
      <BarChart
        style={{
          marginLeft: -40,
        }}
        data={data}
        width={chartWidth}
        height={chartHeight}
        chartConfig={chartConfig}
        fromZero={true}
        withCustomBarColorFromData={true}
        flatColor={true}
        showBarTops={false}
        withInnerLines={true}
      />
    </Container>
  );
};

export default GraficBar;
