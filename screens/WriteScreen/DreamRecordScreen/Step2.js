import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { ScreenContainer } from './style';
import FeelingsQuestion from '../../../components/DreamQuestions/FeelingsQuestion';
import Barra from '../../../components/Barra';
import { QuestionContainer, QuestionText } from '../../../components/DreamQuestions/StyleQuestion';

export default function Step2() {
  const { width } = useWindowDimensions();

  const feelingsOptions = ['Felicidade', 'Curiosidade', 'Tristeza', 'Ansiedade', 'Medo', 'Surpresa', 'Raiva', 'Calma', 'Frustração', 'Empolgação'];
  const [selectedFeelingsIndexes, setSelectedFeelingsIndexes] = useState([]); // Inicialize com uma matriz vazia

  const handleFeelingsClick = (index) => {
    if (selectedFeelingsIndexes.includes(index)) {
      setSelectedFeelingsIndexes(selectedFeelingsIndexes.filter(item => item !== index));
    } else {
      setSelectedFeelingsIndexes([...selectedFeelingsIndexes, index]);
    }
  };
  
  console.log("Sentimentos selecionados: " + selectedFeelingsIndexes)
  return (
    <ScreenContainer windowWidth={width}>
      <QuestionContainer>
        <QuestionText>Como você se sentiu no sonho?</QuestionText>
      </QuestionContainer>

      <FeelingsQuestion
        options={feelingsOptions}
        selectedAnswers={selectedFeelingsIndexes} // Atualizado para selectedAnswers
        handleAnswerClick={handleFeelingsClick}
      />
    </ScreenContainer>
  );
}