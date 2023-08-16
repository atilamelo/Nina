import React, { useState, useContext } from 'react'
import {TextInput, Platform, useWindowDimensions, Pressable, ScrollView } from 'react-native'
import { ScreenContainer } from './style'
import { QuestionContainer, QuestionText } from '../../../components/DreamQuestions/StyleQuestion';
import { DreamContext } from '../../../contexts/DreamContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import styled from 'styled-components/native'
import TagQuestion from '../../../components/DreamQuestions/TagQuestion';

export default function Step1() {
  const dreamContext = useContext(DreamContext);
  const dreamData = dreamContext.dreamData;
  const setDreamData = dreamContext.setDreamData;
  const { width } = useWindowDimensions();
  const tagOptions = ['Pesadelo', 'Surreal', 'Vivido', 'Diferente', 'Recorrente'];


  const [dateOfDream, setDateOfDream] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type === "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
  
      if (Platform.OS === "android") {
        toggleDatepicker();
        const formattedDate = formatDate(currentDate);
        setDateOfDream(formattedDate);
      }
    } else {
      toggleDatepicker();
    }
  };
  
  const formatDate = (date) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
  };


  const handleTagsClick = (index) => {
    if (dreamData.selectedTags.includes(index)) {
      setDreamData(prevData => ({
        ...prevData,
        selectedTags: prevData.selectedTags.filter(item => item !== index)
      }))
    } else {
      setDreamData(prevData => ({
        ...prevData,
        selectedTags: [...prevData.selectedTags, index]
      }));    }
  };

  return (
    <ScreenContainer windowWidth={width}>
      <QuestionContainer>
        <QuestionText>Que dia você sonhou?</QuestionText>
      </QuestionContainer>

      {showPicker && (
        <DateTimePicker
        mode="date"
        display="spinner"
        value={date}
        onChange={onChange}
        maximumDate={new Date()}
      />)}

      {!showPicker && (
        <Pressable onPress={toggleDatepicker}>
          <Styled>
            <TextInput
              style={{ textAlignVertical: 'center', justifyContent: 'space-between', color: '#ffffff'}}
              placeholder="15 Ago 2023"
              value={dateOfDream}
              onChangeText={setDateOfDream}
              placeholderTextColor="#ffffff"
              editable={false}
            />
          </Styled>
        </Pressable>
      )}
      
      <QuestionContainer>
        <QuestionText>Deseja adicionar esse sonho em alguma tag?</QuestionText>
      </QuestionContainer>

      <TagContainer>
        <ScrollView>
          <TagQuestion
            options={tagOptions}
            selectedAnswers={dreamData.selectedTags}
            handleAnswerClick={handleTagsClick} 
          />
        </ScrollView>
      </TagContainer>

    </ScreenContainer>
  )
}

const Styled = styled.View`

  align-items: center;
  justify-content: center;
  flex-direction: row;
  
`;

const TagContainer = styled.View`
  width: 300px; 
  height: 280px;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 5%;
`;