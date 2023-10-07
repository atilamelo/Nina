import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Background from '@components/Background';
import styled from 'styled-components/native';
import CalendarPicker from 'react-native-calendar-picker';
import 'moment/locale/pt-br';
import MainHeader from '@components/Headers/MainHeader';
import DreamContainer from '@components/CalendarComponents/DreamContainer';
import moment from 'moment';

// Images
import menuIco from '@assets/icons/menu.png';

const Container = styled(View)`
  flex: 1;
`;

const Imagem = styled(Image)`
    width: 15px;
    height: 26px;
`;

const StyledCalendarPicker = styled(CalendarPicker)`
`;

const MenuButton = styled.TouchableOpacity`
`;

const Texto = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Inter SemiBold';
  margin-left: 7.4%;
  margin-vertical: 6%;
`;

class CalendarScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }

    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate
            ? moment(selectedStartDate).locale('pt-br').format('LL')
            : '';

        return (
            <Background>
                <MainHeader
                    left={
                        <MenuButton onPress={() => navigation.openDrawer()}>
                            <Image
                                source={menuIco}
                                style={{ width: 24, height: 20, resizeMode: 'contain' }}
                            />
                        </MenuButton>
                    }
                />
                <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
                    <Container>
                        <StyledCalendarPicker
                            onDateChange={this.onDateChange}
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
                            selectMonthTitle="Selecionar Mês em "
                            selectYearTitle="Selecionar Ano"
                            headerWrapperStyle={{
                                padding: 20,
                            }}
                        />
                        <Texto>Sonhos do dia</Texto>
                        <DreamContainer
                            Data={startDate}
                            Titulo="Lorem Ipsum"
                            Sonho="Lorem ipsum dolor sit amet, consectetu adipis"
                        />
                        <DreamContainer
                            Data={startDate}
                            Titulo="Lorem Ipsum"
                            Sonho="Lorem ipsum dolor sit amet, consectetu adipis"
                        />
                    </Container>
                </ScrollView>
            </Background>
        );
    }
}

export default CalendarScreen;
