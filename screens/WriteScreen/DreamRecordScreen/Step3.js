import React, { useContext } from 'react';
import { useWindowDimensions, ScrollView } from 'react-native';
import { ScreenContainer } from './style'
import { DreamContext } from '@contexts/DreamContext';
import LucidyQuestion from '@components/DreamQuestions/LucidyQuestion';
import YesNoQuestion from '@components/DreamQuestions/YesNoQuestion';
import Barra from '@components/Barra';
import { QuestionContainer, QuestionText } from '@components/DreamQuestions/StyleQuestion';

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

    const margin = 30;

    return (

        <ScreenContainer windowWidth={width}>
            <ScrollView contentContainerStyle={{ paddingBottom: '90%' }}  showsVerticalScrollIndicator={false}
             showsHorizontalScrollIndicator={false}>

                <LucidyQuestion
                    questionLabel={'Em qual nível de lucidez você classifica esse sonho?'}
                    lucidityRating={dreamContext.dreamData.lucidyRating}
                    handleElipseClick={handleLucidyClick}
                />
                <Barra marginTop={margin} />

                <YesNoQuestion
                    options={[
                        { label: 'Sim', value: true }, // Lembrar de dar a opção de desmarcar
                        { label: 'Não', value: false }
                    ]}
                    questionLabel={'Seu sonho teve conexão com a realidade?'}
                    selectedAnswer={dreamData.realityConection}
                    handleAnswerClick={handleRealityClick}
                />

                <Barra marginTop={margin} />

                <YesNoQuestion
                    options={[
                        { label: 'Sim', value: true },
                        { label: 'Não', value: false }
                    ]}
                    questionLabel={'Esse sonho é recorrente?'}
                    selectedAnswer={dreamData.recurrence}
                    handleAnswerClick={handleRecurrenceClick}
                />
            </ScrollView>
        </ScreenContainer>
    )
}
