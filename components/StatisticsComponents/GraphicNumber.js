import React from 'react';
import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";
import { useWindowDimensions } from 'react-native';

const Container = styled.View`
  flex-direction: row;
  align-items: baseline;
  width: 30%;
  height: 60%;
`;

const ContentItem = styled.View`
  padding: 3%;
  box-sizing: border-box;
  margin-horizontal: 1%;
  justify-content: center;
`;

const Numero = styled.Text`
  color: #fff;
  font-size: ${RFValue(29)}px;
  font-family: 'Inter Bold';
  text-align: center;
`;

const Texto = styled.Text`
  color: #fff;
  font-size: ${RFValue(12)}px;
  font-family: 'Inter Regular';
  text-align: center;
`;

const NumberContent = ({ data }) => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      {data.map((rowData, index) => (
        <ContentItem key={index}>
          <Numero>{rowData.value}</Numero>
          <Texto>{rowData.title}</Texto>
        </ContentItem>
      ))}
    </Container>
  );
};

export default NumberContent;
