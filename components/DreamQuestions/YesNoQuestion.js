import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { QuestionText, QuestionContainer } from './StyleQuestion';

const YesNoQuestion = styled.View`
    width: 82px;
    height: 35px;
    border-radius: 10px;
    background-color: ${ p => (p.selected ? '#9F238E' : '#2B314C')};
    justify-content: center;
    align-items: center;
    margin-left: 12.5px;
    margin-right: 12.5px;
`;

const YesNoGroup = styled.View`
    background-color: 'blue';
    flex-direction: row;
    margin-top: 25px;
`

const YesNoText = styled.Text`
    color: #fff;
    font-family: "Inter Bold";
    font-size: 18px;
`;

const YesNoQuestionComponent = ({ options, questionLabel, selectedAnswer, handleAnswerClick }) => {
    return (
        <QuestionContainer>
            <QuestionText>{questionLabel}</QuestionText>
            <YesNoGroup>
                {options.map((option) => (
                    <TouchableOpacity
                        key={option.label}
                        onPress={() => handleAnswerClick(option.value)}
                        disabled={selectedAnswer === option.value}
                    >
                        <YesNoQuestion selected={selectedAnswer === option.value}>
                            <YesNoText>{option.label}</YesNoText>
                        </YesNoQuestion>
                    </TouchableOpacity>
                ))}
            </YesNoGroup>
        </QuestionContainer>
    );
};

export default YesNoQuestionComponent;
