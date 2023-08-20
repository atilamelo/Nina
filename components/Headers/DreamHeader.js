import React from 'react';
import styled from 'styled-components/native';
import MainHeader from './MainHeader';
import { BackButton } from './styles';

const DreamHeader = ({ navigation, onSkip }) => {
    return (
        <MainHeader
            left={<BackButton onPress={() => {navigation.goBack()}}/>}
            right={
                <SkipButton onPress={onSkip}>
                    <SkipText>Pular</SkipText>
                </SkipButton>
            }
        />
    );
};

export default DreamHeader;

const SkipButton = styled.TouchableOpacity` 
    width: 74px;
    height: 30px;
    border-radius: 15px;
    background-color: #2B314C;
    align-items: center;
    justify-content: center;
`;

const SkipText = styled.Text`
    font-family: "Inter Bold";
    font-size: 16px;
    color: #FFFFFF;
`;
