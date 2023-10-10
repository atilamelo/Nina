import React from 'react';
import styled from 'styled-components/native';

const TagGroup = styled.View`
  align-items: center;
`;

const TagQuestion = styled.TouchableOpacity`
  width: 274px;
  height: 50px;
  border-radius: 10px;
  background-color: ${p => (p.selected ? '#9F238E' : '#2B314C')};
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const TagText = styled.Text`
  color: #fff;
  font-family: "Inter SemiBold";
  font-size: 18px;
`;

const TagQuestionComponent = ({ options, selectedAnswers, handleAnswerClick }) => {
  selectedTagsId = selectedAnswers.map(tag => tag._id);
  console.log("selectedTagsId", selectedTagsId)
  const buttons = options.map((option, index) => (
    <TagQuestion
      key={option._id}
      selected={selectedTagsId.includes(option._id)}
      onPress={() => handleAnswerClick(option)}
    >
      <TagText>{option.name}</TagText>
    </TagQuestion>
  ));

  return (
    <TagGroup>
      {buttons}
    </TagGroup>
  );
};

export default TagQuestionComponent;
