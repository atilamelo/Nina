import React from 'react';
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
  margin-horizontal: 33px; /* Espaço nas margens laterais */
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

const DrawerContent = ({ navigation }) => {
  return (
    <Background>
      <Content>

        <MenuItem onPress={() => navigation.navigate('Home')}>
          <Image 
            source={home}
            style={{ width: 23, height: 24, resizeMode: 'contain', tintColor: 'white',}}
          />
          <MenuItemText>Todos os sonhos</MenuItemText>
        </MenuItem>

        <MenuItem onPress={() => navigation.navigate('Trash')}>
          <Image 
            source={lixo}
            style={{ width: 28, height: 29, resizeMode: 'contain' }}
          />
          <MenuItemText>Lixeira</MenuItemText>
        </MenuItem>

        <MenuItem onPress={() => navigation.navigate('FavoriteScreen')}>
          <Image 
            source={favoritos}
            style={{ width: 29, height: 29, resizeMode: 'contain' }}
          />
          <MenuItemText>Favoritos</MenuItemText>
        </MenuItem>
        
        <Barra/>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '15%', marginHorizontal: '12%'}}>
          <Image 
            source={tag}
            style={{ width: 32, height: 23, resizeMode: 'contain' }}
          />
          <MenuItemText>Tags</MenuItemText>
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
