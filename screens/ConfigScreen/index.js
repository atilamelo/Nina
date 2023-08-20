import React, { useState } from 'react'; // Importe o useState
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import ConfigItem from '../../components/ConfigComponets/ConfigItem';
import Barra from '../../components/Barra';
import LogOff from '../../components/ConfigComponets/LogOff';
import Background from '../../components/Background';
import Logged from '../../components/ConfigComponets/Logged';
import FaleConosco from './ConfigItemScreen/FaleConosco';

const ConfigScreen = ({ navigation }) => {

  const ToNotificacoes = ({}) => {
    navigation.navigate('Notificacoes');
  };

  const ToBackup = ({}) => {
    navigation.navigate('Backup');
  }

  const ToFaleConosco = ({}) => {
    navigation.navigate('FaleConosco');
  }

  const handleLogout = () => {
    setIsLogged(false); // Define o estado para "false" ao fazer logout
  };
  
  //Defina true para logado e false para deslogado
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Background>
        <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
            <Container>
            
                {isLogged ? <Logged /> : <LogOff setIsLogged={setIsLogged}/> }

                <Content>
                    <Barra/>
                </Content>

                <ConfigItem label="Notificações" iconSource={require('../../assets/Config/notificacao.png')} onPress={ToNotificacoes} />
                <ConfigItem label="Backup em nuvem" iconSource={require('../../assets/Config/backup.png')} onPress={ToBackup} />
                <ConfigItem label="Fale conosco" iconSource={require('../../assets/Config/telefone.png')} onPress={ToFaleConosco} />
                <ConfigItem label="Sair" iconSource={require('../../assets/Config/sair.png')} onPress={handleLogout} />

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
