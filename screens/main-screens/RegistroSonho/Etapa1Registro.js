import React, { useState } from 'react';
import Background from '../../../components/Background/Background';
import styled from 'styled-components/native';
import QuestionNavigationHeader from '../../../components/Headers/QuestionNavigationHeader';
import NextButton from '../../../components/NextButton';
import Screen1 from './Screen1';

const QuestionsContainer = styled.View`
    `

const BottomBarContainer = styled.View`
    flex: 1;
    position: absolute;
    width: 100%;
    bottom: 6.5%;
    align-items: flex-end;
    align-self: flex-end;
`;

const MainContent = styled.View`
    flex: 1;
    margin-right: 8%;
    margin-left: 8%;
`

const Etapa1Registro = ({ navigation }) => {

    const handleSkip = () => {

    };

    const handleBack = () => {

    }

    const handleNext = () => {

    }

    return (
        <Background>
            <QuestionNavigationHeader onSkip={handleSkip} onBack={handleBack} />

            <MainContent>

            <Screen1/>

            <BottomBarContainer>
                <NextButton onClick={handleNext}/>
            </BottomBarContainer>
            </MainContent>
        </Background>
    );
};

export default Etapa1Registro;
