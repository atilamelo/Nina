// dreamContainer.js
import React from 'react';
import styled from 'styled-components/native';
import { View, StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const Container = styled.View`
  max-height: ${windowHeight * 0.8}px;
  border-radius: 7px;
  border: 1px solid #9F238E;
  background-color: transparent;
  margin-bottom: 8%;
  margin-horizontal: 7%;
`;

const Content = styled.View`
  margin-vertical: 5%;
`;

const Title = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Inter SemiBold';
  margin-left: 7.3%;
  margin-vertical: 1%;
`;

const Texto = styled.Text`
  color: #ffffff;
  font-size: 11px;
  font-family: 'Inter Regular';
  margin-left: 7.3%;
`;

const DreamContainer = ({ Titulo, Data, Sonho }) => {
    return (
        <Container>
            <Content>
                <Texto>{Data}</Texto>
                <Title>{Titulo}</Title>
                <Texto>{Sonho}</Texto>
            </Content>
        </Container>
    );
};

export default DreamContainer;
