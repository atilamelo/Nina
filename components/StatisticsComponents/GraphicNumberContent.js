// GraphicCloudContent.js
import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import GraphicNumber from '@components/StatisticsComponents/GraphicNumber';

const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 7%;
`;

const Content = styled.View`
  background-color: #222840;
  border-radius: 7px;
  align-items: center;
  overflow: hidden;
`;

const ContentTeste = styled.View`
  justify-content: center;
`;

const Texto = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Inter SemiBold';
  margin-top: 6%;
  width: 87%;
  margin-left: 6%;
`;

const GraphicNumberContent = ({ Titulo, data }) => {
  const { width, height } = Dimensions.get('window');
  const widthSize = width * 0.91;
  const heightSize = height * 0.23;

  return (
    <Container>
      <Content style={{ width: widthSize, height: heightSize }}>
        <Texto>{Titulo}</Texto>
        <ContentTeste>
          <GraphicNumber data={data}/>
        </ContentTeste>
      </Content>
    </Container>
  );
};

export default GraphicNumberContent;
