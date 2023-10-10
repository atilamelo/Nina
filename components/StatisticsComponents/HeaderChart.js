import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';

const HeaderContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin-top: 5%;
`;

const IconImage = styled(Image)`
  width: 12px;
  height: 21px;
`;

const IconContent = styled(TouchableOpacity)`
  padding: 5px;
`;

const Header = () => {

    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());

    // Função para navegar para o próximo mês
    const goToNextMonth = () => {
        setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % 12);
    };

    // Função para navegar para o mês anterior
    const goToPreviousMonth = () => {
        setCurrentMonthIndex((prevIndex) => (prevIndex - 1 + 12) % 12);
    };

    return (
        <HeaderContainer>
        
            <IconContent onPress={goToPreviousMonth}>
                <IconImage source={require('@assets/icons/anterior.png')} />
            </IconContent>

            <Text style={{ fontSize: 15, fontFamily: "Inter SemiBold", color: '#fff' }}>{months[currentMonthIndex]}</Text>

            <IconContent onPress={goToNextMonth}>
                <IconImage source={require('@assets/icons/proximo.png')} />
            </IconContent>
        </HeaderContainer>
    );
};

export default Header;
