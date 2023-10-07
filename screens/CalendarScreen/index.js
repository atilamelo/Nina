import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Background from '@components/Background';
import styled from 'styled-components/native';
import CalendarPicker from 'react-native-calendar-picker';
import 'moment/locale/pt-br'; // Adicionado para definir o idioma para português

const Container = styled(View)`
  flex: 1;
  margin-top: 25%;
`;

const Imagem = styled(Image)`
    width: 15px;
    height: 26px;
`;

const StyledCalendarPicker = styled(CalendarPicker)`
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
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';

        return (
            <Background>
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
                        selectedDayTextStyle={{
                        }}
                        customDatesStyles={[
                            {
                                date: new Date(),
                            },
                        ]}
                        todayTextStyle={[{
                            color: 'black',
                        }]}
                        monthTitleStyle	={{
                            fontSize: 18,
                            fontFamily: 'Inter Bold'
                        }}
                        yearTitleStyle	={{
                            fontSize: 18,
                            fontFamily: 'Inter Bold' 
                        }}
                        selectedDayColor="#9F238E"
                        selectedDayTextColor="white"
                        nextComponent={<Imagem source={require('@assets/icons/proximo.png')} />} 
                        previousComponent={<Imagem source={require('@assets/icons/anterior.png')} />} 
                        dayLabelsWrapper={{ borderTopWidth: 0, borderBottomWidth: 0 }}
                        selectMonthTitle = "Selecionar Mês em "
                        selectYearTitle = "Selecionar Ano"
                        headerWrapperStyle={{
                           padding: 20
                        }}
                    />
                    <View>
                        <Text>SELECTED DATE: {startDate}</Text>
                    </View>
                </Container>
            </Background>
        );
    }
}

export default CalendarScreen;
