import React, { useState, useContext } from 'react'
import {TextInput, Platform, useWindowDimensions, Pressable, ScrollView, Image } from 'react-native'
import { QuestionContainer, QuestionText } from '@components/DreamQuestions/StyleQuestion';
import { useQuery, useRealm } from '@databases/realm';
import { ScreenContainer } from './style'
import { useNavigation } from '@react-navigation/native';
import { DreamContext } from '@contexts/DreamContext';
import { TagSchema } from '@databases/schemas/TagSchema';
import TagQuestion from '@components/DreamQuestions/TagQuestion';
import DateTimePicker from '@react-native-community/datetimepicker';
import styled from 'styled-components/native'

import mais from '@assets/icons/mais.png';

export default function Step1() {
  const dreamContext = useContext(DreamContext);
  const dreamData = dreamContext.dreamData;
  const setDreamData = dreamContext.setDreamData; 
  const { width } = useWindowDimensions();
  const tagOptions = useQuery(TagSchema)
  const navigation = useNavigation();
  const realm = useRealm();

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type === 'set') {
      const currentDate = selectedDate;
      setDreamData(prevData => ({
        ...prevData,
        creationDate: currentDate
      }));
  
      if (Platform.OS === 'android') {
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

  const handleTagsClick = (tagData) => {
    setDreamData((prevData) => {
      const selectedTagsId = prevData.selectedTags.map((tag) => tag._id);
  
      if (selectedTagsId.includes(tagData._id)) {
        // Remove the tag if it's already selected
        return {
          ...prevData,
          selectedTags: prevData.selectedTags.filter((item) => item._id !== tagData._id),
        };
      } else {
        // Add the tag if it's not already selected
        return {
          ...prevData,
          selectedTags: [...prevData.selectedTags, tagData],
        };
      }
    });
  };
  

  const navigateToAddTag = () => {
    navigation.navigate('AddTag');
  }

  const [datePlaceHolder, setDatePlaceHolder] = useState(formatDate(dreamData.creationDate));
  const [showPicker, setShowPicker] = useState(false);

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
          value={dreamData.creationDate}
          onChange={onChange}
          maximumDate={new Date()}
        />
      )}

      <QuestionContainer>
        <QuestionText>Deseja adicionar esse sonho em alguma tag?</QuestionText>
      </QuestionContainer>

      <TagContainer>
        <ScrollView style={{ width: 300 }}>
          
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
