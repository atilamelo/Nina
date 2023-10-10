import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { BarChart } from 'react-native-chart-kit';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const GraficBar = ({ contentWidth }) => {
  const screenWidth = Dimensions.get('window').width;

  const data = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5'],
    datasets: [
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
    ],
  };

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
      fontFamily: "Inter Regular",
      fontSize: "11px",
    },
  };

  const chartWidth = contentWidth * 0.999;
  const chartHeight = (chartWidth / screenWidth) * 235;

  return (
    <Container>
      <BarChart
        style={{
          marginLeft: -40
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
