import React from 'react'
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

const TextoComponents = ({ sonho }) => {
    return (
     
        <TextContainer>
            <Texto>
                {sonho}
            </Texto>
        </TextContainer>
    )
}

const TextContainer = styled.View`
    flex: 1;
    margin-top: 6%;
    width: 85%;
`;

const Texto = styled.Text`
    color: white ;
    text-align: justify;
    font-family: 'Inter Regular';
    font-size: 16px;  
`;

export default TextoComponents;
