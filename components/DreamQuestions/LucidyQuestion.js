import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { QuestionContainer, QuestionText } from './StyleQuestion';

const ElipseGroup = styled.View`
    flex-direction: row;
    margin-top: 25px;
`;

const ElipseQuestion = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: ${ p  => (p.selected ? '#9F238E' : '#2B314C')};
    justify-content: center;
    align-items: center;
    margin: 0px 0px 0px 10px;
`;

const ElipseText = styled.Text`
    color: #fff;
    font-family: "Inter Bold";
    font-size: 25px;
`;

const LucidyQuestion = ({ questionLabel, ...props }) => {
    return (
      <QuestionContainer>
        <QuestionText>{questionLabel}</QuestionText>
        <ElipseGroup>
          {[1, 2, 3, 4, 5].map((num, index) => (
            <TouchableOpacity
              key={num}
              onPress={props.handleElipseClick ? () => props.handleElipseClick(index) : undefined}
              disabled={props.lucidityRating === index || props.disabled}
            >
              <ElipseQuestion selected={props.lucidityRating === index}>
                <ElipseText>{num}</ElipseText>
              </ElipseQuestion>
            </TouchableOpacity>
          ))}
        </ElipseGroup>
      </QuestionContainer>
    );
  };

export default LucidyQuestion;
