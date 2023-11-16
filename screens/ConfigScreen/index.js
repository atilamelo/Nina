import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import ConfigItem from '@components/ConfigComponets/ConfigItem';
import Barra from '@components/Barra';
import LogOff from '@components/ConfigComponets/LogOff';
import Background from '@components/Background';
import Logged from '@components/ConfigComponets/Logged';
import AlertModal from '@components/Modals/AlertModal';

const ConfigScreen = ({ navigation }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const ToNotificacoes = () => {
    navigation.navigate('Notificacoes');
  };

  const ToBackup = () => {
    navigation.navigate('Backup');
  };

  const ToFaleConosco = () => {
    navigation.navigate('FaleConosco');
  };

  const handleLogout = () => {
    if (isLogged) {
      setIsLogoutModalVisible(true);
    }
  };

  const confirmLogout = () => {
    setIsLogoutModalVisible(false);
    setIsLogged(false);
  };

  const cancelLogout = () => {
    setIsLogoutModalVisible(false);
  };

  const margin = 30;

  return (
    <Background>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <Container>
          {isLogged ? <Logged /> : <LogOff setIsLogged={setIsLogged} />}

          <Content>
            <Barra marginTop={margin} />
          </Content>

          <ConfigItem label="Notificações" iconSource={require('../../assets/Config/notificacao.png')} onPress={ToNotificacoes} />
          <ConfigItem label="Fale conosco" iconSource={require('../../assets/Config/telefone.png')} onPress={ToFaleConosco} />

          {isLogged && (
            <ConfigItem
              label="Sair"
              iconSource={require('../../assets/Config/sair.png')}
              onPress={handleLogout}
            />
          )}

          <AlertModal
            visible={isLogoutModalVisible}
            content="Tem certeza que deseja sair?"
            button1Text='SAIR'
            button2Text='CANCELAR'
            onRequestButton1={confirmLogout}
            onRequestButton2={cancelLogout}
            button1Color="#BD2E32"
            onClose={() => setIsLogoutModalVisible(false)}
          />
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