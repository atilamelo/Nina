import React, { useState, useContext } from 'react';
import { useWindowDimensions, ScrollView } from 'react-native';
import { ScreenContainer } from './style';
import { QuestionContainer, QuestionText } from '@components/DreamQuestions/StyleQuestion';
import { DreamContext } from '@contexts/DreamContext';
import FeelingsQuestion from '@components/DreamQuestions/FeelingsQuestion';

export default function Step2() {
  const dreamContext = useContext(DreamContext);
  const dreamData = dreamContext.dreamData;
  const setDreamData = dreamContext.setDreamData;
  const { width } = useWindowDimensions();
  const feelingsOptions = ['Felicidade', 'Curiosidade', 'Tristeza', 'Ansiedade', 'Medo', 'Surpresa', 'Raiva', 'Calma', 'Frustração', 'Empolgação'];

  const handleFeelingsClick = (index) => {
    if (dreamData.selectedFeelings.includes(index)) {
      setDreamData(prevData => ({
        ...prevData,
        selectedFeelings: prevData.selectedFeelings.filter(item => item !== index)
      }));
    } else {
      setDreamData(prevData => ({
        ...prevData,
        selectedFeelings: [...prevData.selectedFeelings, index]
      }));
    }
  };

  return (
    <ScreenContainer windowWidth={width}>
      <ScrollView contentContainerStyle={{ paddingBottom: '80%' }} showsVerticalScrollIndicator={false}
       showsHorizontalScrollIndicator={false}>
        <FeelingsQuestion
          questionLabel={'Como você se sentiu no sonho?'}
          options={feelingsOptions}
          selectedAnswers={dreamData.selectedFeelings} // Atualizado para selectedAnswers
          handleAnswerClick={handleFeelingsClick}
        />
      </ScrollView>
    </ScreenContainer>
  );
}