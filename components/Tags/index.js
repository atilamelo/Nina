import { Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';
import tag from '@assets/icons/tag.png'; 
import { useNavigation } from '@react-navigation/native';

const TagItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const MenuItemText = styled.Text`
  font-family: 'Inter Regular';
  font-size: 15px;
  color: #FFF;
  margin-left: 20px;
`;

const Tags = ({ text, color, marginLeft, marginVertical, onLongPress }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log('Tag selecionada:', text); 
    // Navegar para a tela TagsEspecificas, passando a tag como parâmetro, se necessário
  };

  return (
    <TagItem onPress={handlePress} onLongPress={onLongPress} style={{ marginVertical: marginVertical }}>
      <Image
        source={tag}
        style={{ width: 32, height: 23, resizeMode: 'contain', tintColor: color, marginLeft: marginLeft }}
      />
      <MenuItemText>{text}</MenuItemText>
    </TagItem>
  );
};

export default Tags;