import React, { useState, useContext } from 'react'
import {TextInput, Platform, useWindowDimensions, Pressable, ScrollView, Image } from 'react-native'
import { ScreenContainer } from './style'
import { QuestionContainer, QuestionText } from '@components/DreamQuestions/StyleQuestion';
import { DreamContext } from '@contexts/DreamContext';
import TagQuestion from '@components/DreamQuestions/TagQuestion';
import DateTimePicker from '@react-native-community/datetimepicker';
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native';

import mais from '@assets/icons/mais.png';

export default function Step1() {
  const dreamContext = useContext(DreamContext);
  const dreamData = dreamContext.dreamData;
  const setDreamData = dreamContext.setDreamData;
  const { width } = useWindowDimensions();
  const tagOptions = ['Pesadelo', 'Surreal', 'Vivido', 'Recorrente'];
  const navigation = useNavigation();
  
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

  const navigateToAddTag = () => {
    navigation.navigate('AddTag');
  }

  return (
    <ScreenContainer windowWidth={width}>
      <QuestionContainer>
        <QuestionText>Que dia você sonhou?</QuestionText>
      </QuestionContainer>

      <Pressable onPress={toggleDatepicker}>
        <Styled>
          <StyledTextInput
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
        <ScrollView  style={{ width: 300 }}>
          <TagQuestion
            options={tagOptions}
            selectedAnswers={dreamData.selectedTags}
            handleAnswerClick={handleTagsClick} 
          />
          <AdicionarTag onPress={navigateToAddTag}>
            <Image source={mais} style={{ width: 24, height: 24, marginRight: 10, tintColor: '#9F238E' }} />
            <TagText>Criar nova Tag</TagText>
          </AdicionarTag>
        </ScrollView>
      </TagContainer>
    </ScreenContainer>
  )
}

const AdicionarTag = styled.TouchableOpacity`
  width: 274px;
  height: 50px;
  border-radius: 10px;
  background-color: #2B314C;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 14px;
  flex-direction: row;
`;

const TagText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Inter SemiBold';
`;

const StyledTextInput = styled(TextInput)`
  text-align-vertical: center;
  justify-content: space-between;
  background-color: #9f238e;
  padding-horizontal: 50px;
  height: 50px;
  width: 292px;
  font-size: 18px;
  border-radius: 10px;
  font-family: 'Inter SemiBold';
  color: #ffffff;
`;

const Styled = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 10%;
`;

const TagContainer = styled.View`
  width: 300px; 
  height: 250px;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 9%;
`;
