import React, { useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { DreamSchema } from '@databases/schemas/DreamSchema';
import { useQuery } from '@databases/realm';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Background from '@components/Background';
import styled from 'styled-components/native';
import CalendarPicker from 'react-native-calendar-picker';
import 'moment/locale/pt-br';
import DreamContainer from '@components/CalendarComponents/DreamContainer';
import moment from 'moment';
import HomeHeader from '@components/Headers/HomeHeader';
import Barra from '@components/Barra';
import 'moment/locale/pt-br';


const CalendarScreen = ({ navigation }) => {
  // Formatando a data selecionada usando moment.js
  const startDate = moment(selectedDate)
  const [selectedDate, setSelectedDate] = useState(startDate);

  // Função chamada quando a data do calendário é alterada
  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  // Query para buscar os sonhos do dia selecionado
  const allDreams = useQuery(DreamSchema, (collection) => 
    collection.filtered('deleted == $0', false), []
  );
  const formattedDate = moment(selectedDate).format('YYYY-MM-DD');
  const displayDate = moment(selectedDate).locale('pt-br').format('LL');
  const filteredDreams = allDreams.filter(dream => moment(dream.date).format('YYYY-MM-DD') === formattedDate);  
  
  return (
    <Background>
      <HomeHeader
        title={"Calendário"}
      />

      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        <Container>
          {/* Calendário interativo */}
          <StyledCalendarPicker
            onDateChange={onDateChange}
            weekdays={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
            textStyle={{
              fontSize: 18,
              color: 'white',
              fontFamily: 'Inter SemiBold'
            }}
            selectedDayTextStyle={{}}
            customDatesStyles={[
              {
                date: new Date(),
              },
            ]}
            todayTextStyle={[
              {
                color: 'black',
              },
            ]}
            monthTitleStyle={{
              fontSize: 18,
              fontFamily: 'Inter Bold',
            }}
            yearTitleStyle={{
              fontSize: 18,
              fontFamily: 'Inter Bold',
            }}
            selectedDayColor="#9F238E"
            selectedDayTextColor="white"
            nextComponent={<Imagem source={require('@assets/icons/proximo.png')} />}
            previousComponent={<Imagem source={require('@assets/icons/anterior.png')} />}
            dayLabelsWrapper={{ borderTopWidth: 0, borderBottomWidth: 0 }}
            selectMonthTitle=""
            selectYearTitle="Ano"
            headerWrapperStyle={{
              padding: 20,
            }}
          />
          
          <Barra
            marginTop={'6%'}
          />

          <Texto>Sonhos do dia</Texto>

          {/* Componente personalizado para exibir sonhos */}
          {filteredDreams.map((dream) => (
            <TouchableOpacity onPress={() => navigation.navigate('EndDreamScreen', { props: { ...dream, creationDate: dream.creationDate.toISOString(), modificationDate: dream.modificationDate.toISOString() } })}>
              <DreamContainer
                key={dream._id}
                Data={displayDate}
                Titulo={dream.title}
                Sonho={dream.text}
              />
            </TouchableOpacity>
          ))}
        </Container>
      </ScrollView>
    </Background>
  );
};

const Container = styled(View)`
  flex: 1;
`;

const Imagem = styled(Image)`
  width: 15px;
  height: 26px;
`;

const StyledCalendarPicker = styled(CalendarPicker)`
`;

const Texto = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Inter SemiBold';
  margin-left: 7.4%;
  margin-vertical: 6%;
`;

export default CalendarScreen;