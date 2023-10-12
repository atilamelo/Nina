import React from 'react';
import { View, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import styled from 'styled-components/native';

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

  const GraphicPie = ({ contentWidth, data }) => {
    const screenWidth = Dimensions.get('window').width;
  
    const chartWidth = contentWidth * 0.999;
    const chartHeight = (chartWidth / screenWidth) * 235;
  
    return (
      <Container>
        <PieChart
          data={data}
          width={chartWidth}
          height={chartHeight}
          chartConfig={{
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          }}
          accessor="porcentagem"
          backgroundColor="transparent"
          paddingLeft="25"
        />
      </Container>
    );
  };

export default GraphicPie;
