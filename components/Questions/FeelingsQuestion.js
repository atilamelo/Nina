import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const FeelingsQuestion = styled.TouchableOpacity`
  width: 144px;
  height: 37px;
  border-radius: 10px;
  background-color: ${({ selected }) => (selected ? '#9F238E' : '#2B314C')};
  justify-content: center;
  align-items: center;
  margin-left: 12.5px;
  margin-right: 12.5px;
  margin-bottom: 10px;
`;

const FeelingsText = styled.Text`
    color: #fff;
    font-family: "Inter Regular";
    font-size: 20px;
`;

const FeelingsGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20%;
  flex-wrap: wrap; {/* Faz com que os botões quebrem para a linha de baixo */}
`;

const FeelingsQuestionComponent = ({ options, selectedAnswers, handleAnswerClick }) => {
    const buttonRows = [];
    for (let i = 0; i < options.length; i += 2) {
      buttonRows.push(
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }} key={i}>
          <FeelingsQuestion
            selected={selectedAnswers.includes(options[i])}
            onPress={() => handleAnswerClick(options[i])}
          >
            <FeelingsText>{options[i]}</FeelingsText>
          </FeelingsQuestion>
          {options[i + 1] && (
            <FeelingsQuestion
              selected={selectedAnswers.includes(options[i + 1])}
              onPress={() => handleAnswerClick(options[i + 1])}
            >
              <FeelingsText>{options[i + 1]}</FeelingsText>
            </FeelingsQuestion>
          )}
        </View>
      );
    }
  
    return (
      <View>
        <View>
          <FeelingsGroup>{buttonRows}</FeelingsGroup>
        </View>
      </View>
    );
  };
  
  export default FeelingsQuestionComponent;