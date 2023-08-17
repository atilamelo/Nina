import React, { useState } from 'react'; // Importe o useState
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import ConfigItem from '../../components/ConfigComponets/ConfigItem';
import Barra from '../../components/Barra';
import LogOff from '../../components/ConfigComponets/LogOff';
import Background from '../../components/Background';
import Logged from '../../components/ConfigComponets/Logged'; // Importe o componente Logado

const ConfigScreen = ({ navigation }) => {
  const navigateTo = ({ screen_name }) => {
    navigation.navigate(screen_name);
  };
  
  //Defina true para logado e false para deslogado
  const [isLogged, setIsLogged] = useState(true);

  return (
    <Background>
        <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
            <Container>
            
                {isLogged ? <Logged /> : <LogOff />}

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



export default ConfigScreen;
