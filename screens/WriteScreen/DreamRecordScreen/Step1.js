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
  
  // Stores the date formated at schema Day Month(at full lenght) Year
  const [datePlaceHolder, setDatePlaceHolder] = useState("");
  // Stores the state of the datepicker
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type === "set") {
      const currentDate = selectedDate;
      setDreamData(prevData => ({
        ...prevData,
        date: currentDate
      }));
  
      if (Platform.OS === "android") {
        toggleDatepicker();
        const formattedDate = formatDate(currentDate);
        setDatePlaceHolder(formattedDate);
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

      <Pressable onPress={toggleDatepicker}>
        <Styled>
          <TextInput
            style={{
              textAlignVertical: 'center',
              justifyContent: 'space-between',
              color: '#ffffff',
              borderColor: 'white', 
              borderWidth: 2,
              paddingHorizontal: 50,
              height: 50,
              width: 292,
              fontSize: 18,
              borderRadius: 10,
              fontFamily: 'Inter Regular',
            }}
            placeholder={formatDate(new Date())}
            value={datePlaceHolder}
            onChangeText={setDatePlaceHolder}
            placeholderTextColor="#ffffff"
            editable={false}
          />
        </Styled>
      </Pressable>

      {showPicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={dreamData.date}
          onChange={onChange}
          maximumDate={new Date()}
        />
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
  margin-top: 10%;
`;

const TagContainer = styled.View`
  width: 300px; 
  height: 210px;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 9%;
`;
