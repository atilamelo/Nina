import React from 'react';
import styled from 'styled-components/native';

const TagGroup = styled.View`
  align-items: center;
`;

const TagQuestion = styled.TouchableOpacity`
  width: 274px;
  height: 45px;
  border-radius: 10px;
  background-color: ${p => (p.selected ? '#9F238E' : '#2B314C')};
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const TagText = styled.Text`
  color: #fff;
  font-family: "Inter Regular";
  font-size: 20px;
`;

const TagQuestionComponent = ({ options, selectedAnswers, handleAnswerClick }) => {
  const buttons = options.map((option, index) => (
    <TagQuestion
      key={index}
      selected={selectedAnswers.includes(option)}
      onPress={() => handleAnswerClick(option)}
    >
      <TagText>{option}</TagText>
    </TagQuestion>
  ));

  return (
    <TagGroup>
      {buttons}
    </TagGroup>
  );
};

export default TagQuestionComponent;
