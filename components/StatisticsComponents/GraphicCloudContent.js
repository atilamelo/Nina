// GraphicCloudContent.js
import React from 'react';
import { Dimensions, Alert } from 'react-native';
import styled from 'styled-components/native';
import GraphicCloud from '@components/StatisticsComponents/GraphicCloud';

const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 7%;
`;

const Content = styled.View`
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

const GraphicCloudContent = ({ Titulo, data, options }) => {
    const { width, height } = Dimensions.get('window');
    const widthSize = width * 0.91;

    // Calcula a altura estimada com base no número de tags
    const estimatedTagHeight = 11;
    const estimatedTagsCount = data.length;
    const estimatedHeight = estimatedTagHeight * estimatedTagsCount;

    // Define a altura mínima para o Content
    const minHeight = height * 0.3;

    // Use a altura estimada, mas não exceda 80% da altura da tela
    const heightSize = Math.max(minHeight, Math.min(height * 0.8, estimatedHeight));

    return (
        <Container>
            <Content style={{ width: widthSize, minHeight: heightSize }}>
                <Texto>{Titulo}</Texto>
                <GraphicCloud data={data} options={options} />
            </Content>
        </Container>
    );
};

export default GraphicCloudContent;
