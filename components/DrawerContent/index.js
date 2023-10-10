import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import Background from '@components/Background';
import Barra from '@components/Barra';
import Tags from '@components/Tags';
import MenuItem from '@components/DrawerContent/MenuItem';

import home from '@assets/icons/home.png';
import favoritos from '@assets/icons/favoritos.png';
import lixo from '@assets/icons/lixo.png';
import tag from '@assets/icons/tag.png';
import mais from '@assets/icons/mais.png';

const Content = styled.View`
  margin-top: 15%;
`;

const TagItem = styled.TouchableOpacity`
  margin-top: 11%;
  flex-direction: row;
  margin-horizontal: 33px;
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
  const margin = '12%';

  return (
    <Background>
      <Content>
        <MenuItem menuItemText='Todos os Itens' imagem={home} count={todosSonhosCount} />

        <MenuItem menuItemText='Lixeira' imagem={lixo} count={lixeiraCount} />

        <MenuItem menuItemText='Favoritos' imagem={favoritos} count={favoritosCount} />

        <Barra marginTop={margin} />

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '15%', marginHorizontal: '12%' }}>
          <Image
            source={tag}
            style={{ width: 32, height: 23, resizeMode: 'contain' }}
          />
          <MenuItemText>Tags</MenuItemText>
          <CountText>{tagsCount}</CountText>
        </View>

        <Tags color='#9F238E' marginLeft='17%' marginTop='11%' />

        <Tags color='#9F238E' marginLeft='17%' marginTop='11%' />

        <Tags color='#9F238E' marginLeft='17%' marginTop='11%' />

        <TagItem onPress={() => navigation.navigate()}>
          <Image
            source={mais}
            style={{ width: 25, height: 26, resizeMode: 'contain', marginLeft: '7%' }}
          />
          <MenuItemText style={{ fontFamily: 'Inter SemiBold' }}>Adicionar nova tag</MenuItemText>
        </TagItem>

      </Content>
    </Background>
  );
};

export default DrawerContent;
