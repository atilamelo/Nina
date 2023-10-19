import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { QuestionContainer, QuestionText } from './StyleQuestion';

const FeelingsQuestion = styled.TouchableOpacity`
  width: 144px;
  height: 47px;
  border-radius: 10px;
  background-color: ${p => (p.selected ? '#9F238E' : '#2B314C')};
  justify-content: center;
  align-items: center;
  margin-left: 12.5px;
  margin-right: 12.5px;
  margin-bottom: 20px;
`;

const FeelingsText = styled.Text`
    color: #fff;
    font-family: "Inter SemiBold";
    font-size: 18px;
`;

const FeelingsGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 55px;
  flex-wrap: wrap;
`;

const FeelingsQuestionComponent = ({ disabled, options, questionLabel, selectedAnswers, handleAnswerClick }) => {
  const buttonRows = [];

  for (let i = 0; i < options.length; i += 2) {
    buttonRows.push(
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }} key={i}>
        <FeelingsQuestion
          selected={selectedAnswers ? selectedAnswers.includes(options[i]) : false}
          onPress={handleAnswerClick ? () => handleAnswerClick(options[i]) : undefined}
          disabled={disabled}
        >
          <FeelingsText>{options[i]}</FeelingsText>
        </FeelingsQuestion>
        {options[i + 1] && (
          <FeelingsQuestion
            selected={selectedAnswers ? selectedAnswers.includes(options[i + 1]) : false}
            onPress={handleAnswerClick ? () => handleAnswerClick(options[i + 1]) : undefined}
            disabled={disabled}
          >
            <FeelingsText>{options[i + 1]}</FeelingsText>
          </FeelingsQuestion>
        )}
      </View>

    );
  }

  return (
    <QuestionContainer>
      <QuestionText>{questionLabel}</QuestionText>
      <View>
        <View>
          <FeelingsGroup>{buttonRows}</FeelingsGroup>
        </View>
      </View>
    </QuestionContainer>
  );
};


export default FeelingsQuestionComponent;