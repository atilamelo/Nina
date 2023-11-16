import React, { useState } from 'react';
import { TouchableOpacity, Switch, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { RFValue } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ConfigItem = ({ label, description, onPress, handleCheck, showSwitch, isChecked }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    return (
        <TouchableItem onPress={onPress}>
            <ItemContainer>
                <Container>
                    <ItemLabel>{label}</ItemLabel>
                    <ItemDescription>{description}</ItemDescription>
                </Container>
                {showSwitch && (
                    <>
                        <Switch
                            value={isChecked}
                            onValueChange={(value) => {
                                handleCheck();
                                if (value) {
                                    showDatePicker(); // Chama a função para mostrar o seletor de data/hora apenas se o switch estiver ligado
                                } else {
                                    hideDatePicker(); // Esconde o seletor de data/hora se o switch estiver desligado
                                }
                            }}
                            thumbColor={isChecked ? '#FFFFFF' : '#A8A8A8'}
                            trackColor={{ false: '#1A1F32', true: '#9F238E' }}
                        />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="time"
                            onConfirm={(date) => {
                                hideDatePicker();
                                setSelectedDate(date);
                                console.log("Horário selecionado:", date);
                                // Lógica para lidar com o horário selecionado
                            }}
                            onCancel={hideDatePicker}
                        />
                    </>

                )}

            </ItemContainer>
        </TouchableItem>
    );
};

const TouchableItem = styled.View`
    align-self: center;
`;

const ItemContainer = styled.View`
    width: ${windowWidth * 0.9}px;
    height: ${windowHeight * 0.09}px;
    background-color: #2b314c;
    border-radius: 13px;
    padding: 2%;
    margin-top: 6%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center; 
`;


const ItemLabel = styled.Text`
    color: #FFFFFF;
    font-size: ${RFValue(14)}px;
    margin-left: 5%;
    font-family: "Inter Bold";
`;

const ItemDescription = styled.Text`
    color: #A8A8A8;
    font-size: ${RFValue(12)}px;
    margin-top: 4px;
    margin-left: 5%;
    font-family: "Inter Regular";
`;

export default ConfigItem;
