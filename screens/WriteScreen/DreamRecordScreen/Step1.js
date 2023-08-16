import {TextInput, Platform } from 'react-native'
import React, {useState} from 'react'
import { useWindowDimensions, Pressable } from 'react-native';
import { ScreenContainer } from './style'
import { QuestionContainer, QuestionText } from '../../../components/DreamQuestions/StyleQuestion';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Step1() {
  const { width } = useWindowDimensions();

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
          <TextInput
            style={{ justifyContent: 'space-between', color: '#ffffff' }}
            placeholder="15 Ago 2023"
            value={dateOfDream}
            onChangeText={setDateOfDream}
            placeholderTextColor="#ffffff"
            editable={false}
          />
        </Pressable>
      )}
      

    </ScreenContainer>
  )
}