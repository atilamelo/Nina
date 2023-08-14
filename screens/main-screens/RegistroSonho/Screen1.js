import YesNoQuestionComponent from '../../../components/Questions/YesNoQuestion';
import LucidyQuestion  from '../../../components/Questions/LucidyQuestion';
import Barra from '../../../components/Barra/Barra';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useWindowDimensions } from 'react-native';


const ScreenContainer = styled.View`
    padding-right: 25px;
    padding-left: 25px;
`

const Screen1 = () => {
    const { width } = useWindowDimensions();

    const [lucidityRating, setLucidityRating] = useState(null);
    const [realityQuestionAnswer, setRealityQuestionAnswer] = useState(null);
    const [recurrenceQuestionAnswer, setRecurrenceQuestionAnswer] = useState(null);
    
    const handleLucidyClick = (index) => {
        setLucidityRating(index);
    };

    const handleRealityClick = (value) => {
        setRealityQuestionAnswer(value);
    };

    const handleRecurrenceClick = (value) => {
        setRecurrenceQuestionAnswer(value);
    };


    return (
        <ScreenContainer style={{width}}>
            <LucidyQuestion
                lucidityRating={lucidityRating}
                handleElipseClick={handleLucidyClick}
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
        </ScreenContainer>
    )
}

export default Screen1;