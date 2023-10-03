import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import Background from '@components/Background';
import Search from '@components/Search';
import styled from 'styled-components/native';

import mais from '@assets/icons/mais.png';

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Imagem = styled(Image)`
    width: 25.667px;
    height: 26px;
    tint-color: #9F238E;
    margin-right: 40px;
`;

const Content = styled(TouchableOpacity)`
  flex: 1;
  width: 100%;
  flex-direction: row;
  margin-top: 10%;
  margin-left: 19%;
`;

const TagText = styled(Text)`
  color: white;
  font-size: 15px;
  font-family: 'Inter Regular';
`;

const AddTag = ({ navigation }) => {
  
    const [searchQuery, setSearchQuery] = useState('');

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
        value={searchQuery}/>
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
