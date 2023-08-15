import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { ScreenContainer } from './style';
import FeelingsQuestionComponent from '../../../components/Questions/FeelingsQuestion';
import Barra from '../../../components/Barra/Barra';
import { QuestionContainer, QuestionText } from '../../../components/Questions/StyleQuestion';

export default function Screen2() {
  const { width } = useWindowDimensions();

  const feelingsOptions = ['Felicidade', 'Curiosidade', 'Tristeza', 'Ansiedade', 'Medo', 'Surpresa', 'Raiva', 'Calma'];
  const [selectedFeelingsIndexes, setSelectedFeelingsIndexes] = useState([]); // Inicialize com uma matriz vazia

  const handleFeelingsClick = (index) => {
    if (selectedFeelingsIndexes.includes(index)) {
      setSelectedFeelingsIndexes(selectedFeelingsIndexes.filter(item => item !== index));
    } else {
      setSelectedFeelingsIndexes([...selectedFeelingsIndexes, index]);
    }
  };

  return (
    <ScreenContainer windowWidth={width}>
      <QuestionContainer>
        <QuestionText>Como você se sentiu no sonho?</QuestionText>
      </QuestionContainer>

      <FeelingsQuestionComponent
        options={feelingsOptions}
        selectedAnswers={selectedFeelingsIndexes} // Atualizado para selectedAnswers
        handleAnswerClick={handleFeelingsClick}
      />
    </ScreenContainer>
  );
}