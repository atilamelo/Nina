import React, { useState } from 'react';
import Background from '../../../components/Background/Background';
import YesNoQuestionComponent from '../../../components/Questions/YesNoQuestion';
import LucidyQuestion  from '../../../components/Questions/LucidyQuestion';
import Barra from '../../../components/Barra/Barra';
import styled from 'styled-components/native';
import QuestionNavigationHeader from '../../../components/Headers/QuestionNavigationHeader';
import NextButton from '../../../components/NextButton';

const QuestionsContainer = styled.View`
    flex: 1;
    margin-right: 25px;
    margin-left: 25px;
    `


const Etapa1Registro = ({ navigation }) => {
    const [lucidityRating, setLucidityRating] = useState(null);
    const [realityQuestionAnswer, setRealityQuestionAnswer] = useState(null);
    const [recurrenceQuestionAnswer, setRecurrenceQuestionAnswer] = useState(null);

    const handleElipseClick = (index) => {
        setLucidityRating(index);
    };

    const handleRealityClick = (value) => {
        setRealityQuestionAnswer(value);
    };

    const handleRecurrenceClick = (value) => {
        setRecurrenceQuestionAnswer(value);
    };

    const handleSkip = () => {

    };

    const handleBack = () => {

    }

    return (
        <Background>
            <QuestionNavigationHeader onSkip={handleSkip} onBack={handleBack} />

            <QuestionsContainer>
                <LucidyQuestion
                    lucidityRating={lucidityRating}
                    handleElipseClick={handleElipseClick}
                />

                <Barra/>

                <YesNoQuestionComponent
                    options={[
                        { label: 'Sim', value: true },
                        { label: 'Não', value: false }
                    ]}
                    questionLabel={'Seu sonho teve conexão com a realidade?'}
                    selectedAnswer={realityQuestionAnswer}
                    handleAnswerClick={handleRealityClick}
                />

                <Barra/>

                <YesNoQuestionComponent
                    options={[
                        { label: 'Sim', value: true },
                        { label: 'Não', value: false }
                    ]}
                    questionLabel={'Esse sonho é recorrente?'}
                    selectedAnswer={recurrenceQuestionAnswer}
                    handleAnswerClick={handleRecurrenceClick}
                />
            </QuestionsContainer>


        <NextButton/>
        </Background>
    );
};

export default Etapa1Registro;
