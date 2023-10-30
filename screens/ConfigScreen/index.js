import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import ConfigItem from '@components/ConfigComponets/ConfigItem';
import Background from '@components/Background';
import AlertModal from '@components/Modals/AlertModal';
import HomeHeader from '@components/Headers/HomeHeader';

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
          <HomeHeader
            title="Configurações"
          />
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <Container>

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


const Container = styled.View`
  flex: 1;
  flex-grow: 1;
  padding-top: 10%;
`;

export default ConfigScreen;
