import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import Background from '@components/Background';
import Barra from '@components/Barra';

import home from '@assets/icons/home.png'; 
import favoritos from '@assets/icons/favoritos.png'; 
import lixo from '@assets/icons/lixo.png';
import tag from '@assets/icons/tag.png'; 
import mais from '@assets/icons/mais.png'; 

const Content = styled.View`
  margin-top: 15%;
`;

const MenuItem = styled.TouchableOpacity`
  margin-top: 15%;
  flex-direction: row;
  margin-horizontal: 30px; /* Espaço nas margens laterais */
  align-items: center;
`;

const TagItem = styled.TouchableOpacity`
  margin-top: 11%;
  flex-direction: row;
  margin-horizontal: 33px; /* Espaço nas margens laterais */
  align-items: center;
`;

const MenuItemText = styled.Text`
  font-family: 'Inter Regular';
  font-size: 15px;
  color: #FFF;
  margin-left: 20px;
`;

const CountText = styled.Text`
  font-family: 'Inter Bold';
  font-size: 14px;
  color: #8A8686;
  margin-left: 15px;
  flex: 1; /* Ocupar todo o espaço horizontal */
  text-align: right; /* Alinhar o texto à direita */
`;


const DrawerContent = ({ navigation }) => {

  // Posteriormente modifique para que aparece a quantidade exata de sonhos
  const [todosSonhosCount, setTodosSonhosCount] = useState(10);
  const [lixeiraCount, setLixeiraCount] = useState(5);
  const [favoritosCount, setFavoritosCount] = useState(4);
  const [tagsCount, setTagsCount] = useState(10);

  return (
    <Background>
      <Content>
        <MenuItem onPress={() => navigation.navigate('Home')}>
          <Image 
            source={home}
            style={{ width: 23, height: 24, resizeMode: 'contain', tintColor: 'white'}}
          />
          <MenuItemText>Todos os sonhos</MenuItemText>
          <CountText>{todosSonhosCount}</CountText>
        </MenuItem>

        <MenuItem onPress={() => navigation.navigate('Trash')}>
          <Image 
            source={lixo}
            style={{ width: 28, height: 29, resizeMode: 'contain' }}
          />
          <MenuItemText>Lixeira</MenuItemText>
          <CountText>{lixeiraCount}</CountText>
        </MenuItem>

        <MenuItem onPress={() => navigation.navigate('FavoriteScreen')}>
          <Image 
            source={favoritos}
            style={{ width: 29, height: 29, resizeMode: 'contain' }}
          />
          <MenuItemText>Favoritos </MenuItemText>
          <CountText>{favoritosCount}</CountText>
        </MenuItem>
        
        <Barra/>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '15%', marginHorizontal: '12%'}}>
          <Image 
            source={tag}
            style={{ width: 32, height: 23, resizeMode: 'contain' }}
          />
          <MenuItemText>Tags</MenuItemText>
          <CountText>{tagsCount}</CountText>
        </View>

        <TagItem onPress={() => navigation.navigate()}>
          <Image 
            source={tag}
            style={{ width: 32, height: 23, resizeMode: 'contain', tintColor: '#9F238E', marginLeft: '7%'}}
          />
          <MenuItemText>Tag 1</MenuItemText>
        </TagItem>

        <TagItem onPress={() => navigation.navigate()}>
          <Image 
            source={tag}
            style={{ width: 32, height: 23, resizeMode: 'contain', tintColor: '#9F238E', marginLeft: '7%'}}
          />
          <MenuItemText>Tag 2</MenuItemText>
        </TagItem>

        <TagItem onPress={() => navigation.navigate()}>
          <Image 
            source={tag}
            style={{ width: 32, height: 23, resizeMode: 'contain', tintColor: '#9F238E', marginLeft: '7%'}}
          />
          <MenuItemText>Tag 3</MenuItemText>
        </TagItem>

        <TagItem onPress={() => navigation.navigate()}>
          <Image 
            source={mais}
            style={{ width: 25, height: 26, resizeMode: 'contain', marginLeft: '7%'}}
          />
          <MenuItemText style={{ fontFamily: 'Inter SemiBold'}}>Adicionar nova tag</MenuItemText>
        </TagItem>
        
      </Content>
    </Background>
  );
};

export default DrawerContent;
