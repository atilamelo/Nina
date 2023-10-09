import React, { useContext } from 'react';
import { useWindowDimensions } from 'react-native';
import { ScreenContainer } from './style'
import { DreamContext } from '@contexts/DreamContext';
import LucidyQuestion from '@components/DreamQuestions/LucidyQuestion';
import YesNoQuestion from '@components/DreamQuestions/YesNoQuestion';
import Barra from '@components/Barra';

export default function Step3() {
    const dreamContext = useContext(DreamContext);
    const dreamData = dreamContext.dreamData;
    const setDreamData = dreamContext.setDreamData;
    const { width } = useWindowDimensions();

    const handleLucidyClick = (index) => {
        setDreamData({ ...dreamData, lucidyRating: index })
    };

    const handleRealityClick = (value) => {
        setDreamData({ ...dreamData, realityConection: value })
    };

    const handleRecurrenceClick = (value) => {
        setDreamData({ ...dreamData, recurrence: value })
    };

    const marginTopForBarra = 30;

    return (

        <ScreenContainer windowWidth={width}>
            <LucidyQuestion
                lucidityRating={dreamContext.dreamData.lucidyRating}
                handleElipseClick={handleLucidyClick}
            />
            <Barra marginTop={marginTopForBarra}/>

            <YesNoQuestion
                options={[
                    { label: 'Sim', value: true }, // Lembrar de dar a opção de desmarcar
                    { label: 'Não', value: false }
                ]}
                questionLabel={'Seu sonho teve conexão com a realidade?'}
                selectedAnswer={dreamData.realityConection}
                handleAnswerClick={handleRealityClick}
            />

            <Barra marginTop={marginTopForBarra}/>

            <YesNoQuestion
                options={[
                    { label: 'Sim', value: true },
                    { label: 'Não', value: false }
                ]}
                questionLabel={'Esse sonho é recorrente?'}
                selectedAnswer={dreamData.recurrence}
                handleAnswerClick={handleRecurrenceClick}
            />
        </ScreenContainer>
    )
}
