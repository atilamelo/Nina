import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 30%;
  height: 60%;
`;

const ContentItem = styled.View`
  padding: 10px;
  box-sizing: border-box;
  margin-horizontal: 1%;
`;

const Numero = styled.Text`
  color: #fff;
  font-size: 29px;
  font-family: 'Inter Bold';
  text-align: center;
`;

const Texto = styled.Text`
  color: #fff;
  font-size: 12px;
  font-family: 'Inter Regular';
  text-align: center;
`;

const NumberContent = ({ numbers, texts }) => {
  return (
    <Container>
      {numbers.map((number, index) => (
        <ContentItem key={index}>
          <Numero>{number}</Numero>
          <Texto>{texts[index]}</Texto>
        </ContentItem>
      ))}
    </Container>
  );
};

export default NumberContent;
