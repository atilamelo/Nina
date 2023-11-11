import { Image } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const MenuItemText = styled.Text`
  font-family: ${({ isActive }) => (isActive ? 'Inter Bold' : 'Inter Regular')};
  font-size: 15px;
  color: ${({ isActive }) => (isActive ? '#fff' : '#CDCDCD')};
  margin-left: 20px;
`;

const ContentMenu = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-vertical: 15px;
`;

const CountText = styled.Text`
  font-family: 'Inter Bold';
  font-size: 14px;
  color: #8A8686;
  margin-left: auto;
  text-align: right;
`;

const MenuItem = ({ count, imagem, menuItemText, onPress, isActive }) => {
  return (
    <ContentMenu onPress={onPress} >
      <Image
        source={imagem}
        style={{ width: 23, height: 24, resizeMode: 'contain', tintColor: 'white' }}
      />
      <MenuItemText isActive={isActive}>{menuItemText}</MenuItemText>
      <CountText>{count}</CountText>
    </ContentMenu>
  );
};

export default MenuItem;
