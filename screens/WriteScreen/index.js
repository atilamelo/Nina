import React, { useState, useContext, useEffect } from 'react';
import { ScrollView, KeyboardAvoidingView, View, Platform, BackHandler } from 'react-native';
import { FluidDrawerNative } from '@builddiv/fluid-drawer-native';
import { DreamContext } from '@contexts/DreamContext';
import { BasicButton, DegradeButton } from '@components/Buttons';
import { useRealm } from '@databases/realm';
import DreamFooter from '@components/Footers/DreamFooter';
import BackHeader from '@components/Headers/BackHeader';
import Background from '@components/Background';
import styled from 'styled-components/native';
import Record from '@components/Record';
import Reprodutor from '@components/EndComponents/AudioComponents/Reprodutor';
import AlertModal from '@components/Modals/AlertModal';

const WriteScreen = ({ route, navigation }) => {
  // Contexto do sonho
  const { dreamData, setDreamData, clearDreamData } = useContext(DreamContext);
  const realm = useRealm();

  // Estados locais
  const [isBackModalVisible, setIsBackModalVisible] = useState(false);
  const [showRecord, setShowRecord] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isRecordingComplete, setIsRecordingComplete] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (route.params?.idDream !== undefined) {
      console.log("Editing dream", route.params.idDream)
      dreamInfo = realm.objectForPrimaryKey('Dream', route.params.idDream);
      setDreamData((prevDreamData) => ({
        ...prevDreamData,
        id: dreamInfo._id,
        title: dreamInfo.title,
        text: dreamInfo.text,
        creationDate: dreamInfo.creationDate,
        modificationDate: new Date(),
        imagePath: dreamInfo.imagePath,
        localImagePath: dreamInfo.localImagePath,
        audioPath: dreamInfo.audioPath,
        selectedTags: dreamInfo.selectedTags,
        selectedFeelings: dreamInfo.selectedFeelings,
        lucidyRating: dreamInfo.lucidyRating,
        realityConection: dreamInfo.realityConection,
        recurrence: dreamInfo.recurrence,
        deleted: dreamInfo.deleted,
        favorite: dreamInfo.favorite,
      }))
      route.params.idDream = undefined;
    }
  }, [route.params]);

  // Adiciona o ouvinte para o botão de voltar
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', showBackConfirmationModal);

    // Remove o ouvinte quando o componente é desmontado
    return () => backHandler.remove();
  });


  // Função para navegar para a próxima tela
  const nextScreen = () => {
    navigation.navigate('DreamRec');
  };

  // Função para gerar uma imagem (navegar para DreamImage)
  const generateImage = () => {
    navigation.navigate('DreamImage');
  };

  // Funções para atualizar dados do sonho
  const onChangeTitle = (title) => {
    setDreamData((prevData) => ({
      ...prevData,
      title: title,
    }));
  };

  const onChangeText = (text) => {
    setDreamData((prevData) => ({
      ...prevData,
      text: text,
    }));
  };

  // Função para alternar a exibição do gravador de áudio
  const toggleRecord = () => {
    setShowRecord(!showRecord);
    setIsDrawerOpen(true);
  };

  // Função para fechar o drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Função chamada quando a gravação de áudio é concluída
  const onRecordingComplete = () => {
    setIsRecordingComplete(true);
  };

  // Funções para abrir e fechar o modal de alerta
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  // Lógica para apagar o áudio
  const onRequestButton1 = () => {
    setIsRecordingComplete(false);
    dreamData.audioPath = null;
    closeModal();
  };

  // Função para exibir o modal de confirmação de volta
  const showBackConfirmationModal = () => {
    // Verifica se o título ou o texto do sonho foram preenchidos
    if (dreamData.title || dreamData.text|| dreamData.audioPath) {
      // Se algum dos campos estiver preenchido, exibe o modal de confirmação
      setIsBackModalVisible(true);  
    } else {
      setIsDrawerOpen(false);
      navigation.goBack();
    }

    return true; // Impede o comportamento padrão de fechar a tela (Caso pressionado pelo botão do Header)
  };

  // Função chamada quando o usuário confirma a volta
  const onConfirmBack = () => {
    setIsBackModalVisible(false);
    setIsDrawerOpen(false);
    clearDreamData();
    navigation.goBack();
  };

  // Função chamada quando o usuário cancela a volta
  const onCancelBack = () => {
    setIsBackModalVisible(false);
  };

  // Renderização da interface
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      windowSoftInputMode="adjustResize"
    >
      <Background>
        <BackHeader onPress={showBackConfirmationModal} title={'Escreva seu sonho'} />

        <AlertModal
          visible={isBackModalVisible}
          content="Deseja sair sem salvar?"
          button1Text='SAIR'
          button2Text='CANCELAR'
          onRequestButton1={onConfirmBack}
          onRequestButton2={onCancelBack}
          button1Color="#BD2E32"
          onClose={onCancelBack}
        />

        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <Container>
            <Titulo
              placeholder="Título"
              placeholderTextColor="#B4B4B4"
              type="text"
              name="titulo"
              multiline={true}
              onChangeText={onChangeTitle}
              selectionColor="purple"
              maxLength={50}
              value={dreamData.title}
            />

            <Sonho
              placeholder="Escreva aqui seu sonho."
              placeholderTextColor="#B4B4B4"
              type="text"
              name="texto"
              multiline={true}
              onChangeText={onChangeText}
              selectionColor="purple"
              value={dreamData.text}
            />

            {/* Reprodutor de áudio visível quando a gravação está completa */}
            {dreamData.audioPath && (
              <Reprodutor onPress={openModal} audioSource={{ uri: dreamData.audioPath }} />
            )}
          </Container>
        </ScrollView>

        <DreamFooter style={{ justifyContent: 'space-between', backgroundColor:'red'}}>

          <View style={{ flexDirection: 'row' }}>
            
            {/* Botão para iniciar/parar a gravação */}
            <View style={{ marginRight: 27 }}>
              <BasicButton onPress={toggleRecord} iconFile={require('@assets/icons/micPreenchido.png')} iconWidth={31} iconHeight={29} />
            </View>

            {/* Botão para gerar uma imagem */}
            <BasicButton onPress={generateImage} iconFile={require('@assets/icons/image.png')} iconWidth={27} iconHeight={22} />

          </View>

          {/* Botão para avançar para a próxima tela */}
          <DegradeButton onPress={nextScreen} iconFile={require('@assets/icons/arrow.png')} iconWidth={22} iconHeight={22} />

        </DreamFooter>

        {/* Drawer para o gravador de áudio */}
        <FluidDrawerNative
          open={isDrawerOpen}
          onClose={closeDrawer}
          drawerHeight={260}
          drawerStyle={{ backgroundColor: '#2B314C' }}
          backdropStyle={{ backgroundColor: 'transparent' }}
          topTouchAreaStyle={{ marginTop: 0, height: 35, backgroundColor: '#222840', borderRadius: 0, borderTopLeftRadius: 13, borderTopRightRadius: 13 }}
          handleStyle={{ marginTop: 9, height: 6, width: 35, borderRadius: 3, backgroundColor: '#5C658F' }}>
          <Record onRecordingComplete={onRecordingComplete} />
        </FluidDrawerNative>

        {/* Modal de alerta */}
        <AlertModal
          visible={modalVisible}
          content="Deseja apagar o áudio?"
          button1Text='APAGAR'
          onClose={closeModal}
          onRequestButton1={onRequestButton1}
          button1Color="#BD2E32"
        />
      </Background>
    </KeyboardAvoidingView>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Titulo = styled.TextInput`
  margin-vertical: 5%;
  margin-horizontal: 8%;
  font-size: 25px;
  color: #ffffff;
  font-family: 'Inter Bold';
`;

const Sonho = styled.TextInput`
  margin-left: 8%;
  margin-horizontal: 8%;
  font-size: 17px;
  color: #ffffff;
  font-family: 'Inter Regular';
`;

const styles = {
  container: {
    flex: 1,
  },
};

export default WriteScreen;
