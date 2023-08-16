import Barra from '../../../components/Barra';
import React, { useState } from 'react';
import YesNoQuestion from '../../../components/DreamQuestions/YesNoQuestion';
import LucidyQuestion from '../../../components/DreamQuestions/LucidyQuestion';
import { useWindowDimensions } from 'react-native';
import { ScreenContainer } from './style'

export default function Step3() {
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
        <ScreenContainer windowWidth={width}>
            <LucidyQuestion
                lucidityRating={lucidityRating}
                handleElipseClick={handleLucidyClick}
            />

            <Barra/>

            <YesNoQuestion
                options={[
                    { label: 'Sim', value: true }, // Lembrar de dar a opção de desmarcar
                    { label: 'Não', value: false }
                ]}
                questionLabel={'Seu sonho teve conexão com a realidade?'}
                selectedAnswer={realityQuestionAnswer}
                handleAnswerClick={handleRealityClick}
            />

            <Barra/>

            <YesNoQuestion
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
