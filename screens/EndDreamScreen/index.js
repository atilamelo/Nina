import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import Background from '@components/Background';
import { ScrollView } from 'react-native-gesture-handler';
import MainHeader from '@components/Headers/MainHeader';
import styled from 'styled-components/native';
import DreamFooter from '@components/Footers/DreamFooter';
import {DegradeButton } from '@components/Buttons';
import { useNavigation } from '@react-navigation/native';
import Reprodutor from '@components/EndComponents/AudioComponents/Reprodutor';
import TextoComponents from '@components/EndComponents/TextoComponent';
import Barra from '@components/Barra';
import BackHeader from '@components/Headers/BackHeader';

const EndDreamScreen = ({ navigation }) => {

  navigation = useNavigation();
  const [favorited, setFavorited] = useState(false);

  const toggleFavorite = () => {
    setFavorited(!favorited);
  };

  const voltarIcon = require('@assets/icons/Voltar.png');
  //Quando pressionar os favoritos ele muda de cor
  const favoritosIcon = favorited
    ? require('@assets/icons/favoritado.png')
    : require('@assets/icons/favoritos.png');
  const compartilharIcon = require('assets/icons/compartilhar.png');
  const lixoIcon = require('@assets/icons/lixo.png');

  //Eu não sei como isso vai ficar com banco de dados então vou deixar assim por enquanto

  //Modelo JSON
  const modelo = { titulo: 'Loren Ipsum', data: '02/08/2023', tag: 'Tag'};

  //useState
  const [titulo, setTitulo] = useState(modelo);
  const [data, setData] = useState(modelo);
  const [tag, setTag] = useState(modelo);
  const [sonho, setSonho] = useState(modelo);
  
  const [imagePath, setImagePath] = useState(require('@assets/purple_cat.jpg'));

  //Evento
  const evento = (e) => {
    let titulo = e.target.text;
    let data = e.target.text;
    let tag = e.target.text;
    let sonho = e.target.text
    
    setTitulo({...titulo, [titulo]: valor});
    setData({...data, [data]: valor});
    setData({...tag, [tag]: valor});
    setSonho({...sonho, [sonho]: valor});
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      windowSoftInputMode="adjustResize"
    >
      <Background>
        <MainHeader //Header do EndDream
          left={
            <View style={{ width: 1, marginTop: 30}}>
              <BackHeader onPress={() => {navigation.goBack()}} />
            </View> 
          }
          right={
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <FavoriteButton onPress={toggleFavorite}>
                <FavoriteImage
                  source={favoritosIcon}
                  style={{ width: 24, height: 24, marginHorizontal: 12 }}
                />
              </FavoriteButton>

              <TouchableOpacity>
                  <Image 
                      source={compartilharIcon}
                      style={{ width: 24, height: 24, marginHorizontal: 12 }}
                  />
              </TouchableOpacity>

              <TouchableOpacity>
                  <Image 
                      source={lixoIcon}
                      style={{ width: 24, height: 24, marginHorizontal: 12 }}
                  />
              </TouchableOpacity>
            </View>
          }
        />
        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
          <CenteredContainer //Como eu ainda não sei como vai funcionar o Banco de Dados, estou fazendo desse jeito
          >          
            <Titulo onChange={evento}>
              {titulo.titulo} 
            </Titulo>

            <Data onChange={evento}>
              {data.data}
            </Data>

            <Image
              source={imagePath}
              style={{ width: 250, height: 250, marginTop: '5%' }}
            />

            <ContainerTags>
              <Tag>
                <TextTag>{tag.tag}</TextTag>
              </Tag>
              <Tag>
                <TextTag>{tag.tag}</TextTag>
              </Tag>
              <Tag>
                <TextTag>{tag.tag}</TextTag>
              </Tag>
            </ContainerTags>

            <Reprodutor audioSource={require('../../assets/teste.mp3')} />

            <TextoComponents sonho={"Lorem ipsum dolor sit amet. Est natus dolor ut fuga commodi qui velit enim et sint dolore et quibusdam pariatur ut dolorum magni et eius. Eum vero dolor ut possimus Quis et dolor atque ab galisum corrupti et repellendus voluptatem."}/>

            <Barra/>

          </CenteredContainer>
        </ScrollView>

        <DreamFooter style={{justifyContent: 'flex-end'}}>
          <DegradeButton 
              onPress={() => navigation.navigate('WriteScreen')}
              iconFile={require('@assets/icons/pen.png')}
              iconWidth={27}
              iconHeight={27}
          />
        </DreamFooter>

      </Background>
    </KeyboardAvoidingView>
  );
};

export default EndDreamScreen;


const CenteredContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 7%;
`;

const Titulo = styled.Text`

  text-align: center;
  font-size: 17px;
  font-family: 'Inter Bold';
  color: #fff;
`;

const Data = styled.Text`
  text-align: center;
  font-size: 13px;
  font-family: 'Inter Regular';
  color: #D9D9D9;
  margin-top: 3%;
`;

const ContainerTags = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin-top: 9%;
`;

const Tag = styled.View`
  width: 85px;
  height: 30px;
  border-radius: 6px;
  background-color: #2B314C;
  justify-content: center;
`;

const TextTag = styled.Text`
  text-align: center;
  font-size: 14px;
  font-family: 'Inter SemiBold';
  color: #fff;
`;

const BarraContainer = styled.View`
  margin-bottom: 10px;
`;

const FavoriteButton = styled.TouchableOpacity``;

const FavoriteImage = styled.Image``;

