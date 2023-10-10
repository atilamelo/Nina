import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import Background from '@components/Background';
import Search from '@components/Search';
import styled from 'styled-components/native';
import Tags from '@components/Tags';

import mais from '@assets/icons/mais.png';

const Container = styled(View)`
  flex: 1;
  align-self: flex-start;
  margin-left: 8%;
`;

const Imagem = styled(Image)`
  width: 25.667px;
  height: 26px;
  tint-color: #9F238E;
  margin-right: 40px;
`;

const Content = styled(TouchableOpacity)`
  flex-direction: row;
  padding: 10px;
  margin-top: 8%; 
`;

const TagText = styled(Text)`
  color: white;
  font-size: 15px;
  font-family: 'Inter Regular';
`;

const AddTag = ({ navigation }) => {
  // Estado para armazenar o texto da pesquisa
  const [searchQuery, setSearchQuery] = useState('');

  // Função chamada ao pressionar o botão
  const handleContentPress = () => {
    console.log('Tag criada:', searchQuery);
    navigation.goBack();
  };

  return (
    <Background>
      <Search
        navigation={navigation}
        placeholder="Insira o nome da Tag"
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />

      <Tags marginLeft='10%' marginTop='8%' />
      <Tags marginLeft='10%' marginTop='8%' />
      <Tags marginLeft='10%' marginTop='8%' />

      <Container>
        <Content onPress={handleContentPress}>
          <Imagem source={mais} />
          <TagText>Criar tag "{searchQuery}"</TagText>
        </Content>
      </Container>
    </Background>
  );
};

export default AddTag;
