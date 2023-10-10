import { TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

const MenuItemText = styled.Text`
  font-family: 'Inter Regular';
  font-size: 15px;
  color: #FFF;
  margin-left: 20px;
`;

const ContentMenu = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const CountText = styled.Text`
  font-family: 'Inter Bold';
  font-size: 14px;
  color: #8A8686;
  margin-left: 15px;
  flex: 1; /* Ocupar todo o espaço horizontal */
  text-align: right; /* Alinhar o texto à direita */
`;

const MenuItem = ({count, imagem, menuItemText, onPress}) => {
    return (
        <ContentMenu onPress={onPress}>
            <Image
                source={imagem}
                style={{ width: 23, height: 24, resizeMode: 'contain', tintColor: 'white' }}
            />
            <MenuItemText>{menuItemText}</MenuItemText> 
            <CountText>{count}</CountText>
        </ContentMenu>
    )
}

export default MenuItem