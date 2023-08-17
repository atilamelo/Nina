/* Creator: Carla Chicareli
 * Data: 30/06/2023
 * Description: Configurations screen of the App
 */

import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import ConfigItem from '../../components/ConfigItem';
import Barra from '../../components/Barra';
import LoginGoogle from '../../components/LoginGoogle';
import Background from '../../components/Background';

const ConfigScreen = ({ navigation }) => {
  const navigateTo = ({ screen_name }) => {
    navigation.navigate(screen_name);
  };

  return (
    <Background>
        <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
            <Container>
                <Header>
                    <HeaderText>Entre para armazenar seus dados na nuvem!</HeaderText>
                </Header>

                <LoginGoogle/>

                <Content>
                    <Barra/>
                </Content>

                <ConfigItem label="Notificações" iconSource={require('../../assets/Config/notificacao.png')} onPress={() => { }} />
                <ConfigItem label="Backup em nuvem" iconSource={require('../../assets/Config/backup.png')} onPress={() => { }} />
                <ConfigItem label="Termos & Condições" iconSource={require('../../assets/Config/termos.png')} onPress={() => { }} />
                <ConfigItem label="Política de privacidade" iconSource={require('../../assets/Config/termos.png')} onPress={() => { }} />
                <ConfigItem label="Fale conosco" iconSource={require('../../assets/Config/telefone.png')} onPress={() => { }} />
                <ConfigItem label="Sair" iconSource={require('../../assets/Config/sair.png')} onPress={() => { }} />

            </Container>
        </ScrollView>
    </Background>
  );
};

const Content = styled.View`
    flex-grow: 1;
    margin-bottom: 10%;
`;
const Container = styled.View`
  flex: 1;
  flex-grow: 1;
  padding-top: 10%;
`;

const Header = styled.View`
  padding-horizontal: 20px;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10%;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-family: "Inter Bold";
  text-align: center;
  font-size: 17px;
  color: #fff;
`;


export default ConfigScreen;
