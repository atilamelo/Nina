import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import Background from '@components/Background';
import { ScrollView } from 'react-native-gesture-handler';
import EndDreamHeader from '@components/Headers/EndDreamHeader';
import styled from 'styled-components/native';

const EndDreamScreen = ({ navigation }) => {
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
  const modelo = { titulo: 'Loren Ipsum', data: '02/08/2023'};

  //useState
  const [titulo, setTitulo] = useState(modelo);
  const [data, setData] = useState(modelo);

  //Evento
  const evento = (e) => {
    let titulo = e.target.text;
    let data = e.target.text;
    
    setTitulo({...titulo, [titulo]: valor});
    setData({...data, [data]: valor});
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      windowSoftInputMode="adjustResize"
    >
      <Background>
        <EndDreamHeader //Header do EndDream
          left={
            <TouchableOpacity>
              <Image
                source={voltarIcon}
                style={{ width: 24, height: 20, resizeMode: 'contain' }}
              />
            </TouchableOpacity>
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
        <ScrollView>
          <CenteredContainer //Como eu ainda não sei como vai funcionar o Banco de Dados, estou fazendo desse jeito
          >          
            <Titulo onChange={evento}>
              {titulo.titulo} 
            </Titulo>
            <Data onChange={evento}>
              {data.data}
            </Data>
          </CenteredContainer>
        </ScrollView>
      </Background>
    </KeyboardAvoidingView>
  );
};

const styles = {
  container: {
    flex: 1,
  },
};

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

const FavoriteButton = styled.TouchableOpacity``;

const FavoriteImage = styled.Image``;

export default EndDreamScreen;
