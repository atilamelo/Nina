import React from 'react';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 93px;
`;

const SkipButton = styled.TouchableOpacity` 
    width: 74px;
    height: 30px;
    border-radius: 15px;
    background-color: #2B314C;
    align-items: center;
    justify-content: center;
    margin-right: 35px;
`;

const SkipText = styled.Text`
    font-family: "Inter Bold";
    font-size: 16px;
    color: #FFFFFF;
`;

const BackButton = styled.TouchableOpacity`
    margin-left: 20px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    align-items: center;
    justify-content: center;
`;

const BackIcon = styled.Image`
    margin-right: 2px;
    width: 18px;
    height: 29px;
`;

const QuestionNavigationHeader = ({ onSkip, onBack }) => {
    return (
        <HeaderContainer>
            <BackButton onPress={onSkip}>
                <BackIcon source={require('../../assets/icons/Voltar.png')} />
            </BackButton>
            <SkipButton onPress={onBack}>
                <SkipText>Pular</SkipText>
            </SkipButton>
        </HeaderContainer>
    );
};

export default QuestionNavigationHeader;
