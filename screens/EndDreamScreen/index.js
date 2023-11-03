import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import Background from '@components/Background';
import { ScrollView } from 'react-native-gesture-handler';
import { useRealm, useQuery } from '@databases/realm';
import { DegradeButton } from '@components/Buttons';
import { DreamSchema } from '@databases/schemas/DreamSchema';
import DreamFooter from '@components/Footers/DreamFooter';
import DreamDetails from '@components/EndComponents/DreamDetails';
import Header from '@components/EndComponents/Header';
import AlertModal from '@components/Modals/AlertModal';

const EndDreamScreen = ({ route, navigation }) => {
  const realm = useRealm();
  const dreamData = useQuery(DreamSchema).filtered(`_id = "${route.params.props._id}"`)[0];
  const [favorited, setFavorited] = useState(dreamData.favorite);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const toggleFavorite = () => {
    try {
      realm.write(() => {
        const dream = realm.objectForPrimaryKey(DreamSchema, dreamData._id);
        dream.favorite = !favorited;
      });
    } catch (e) {
      console.log(e);
    }

    setFavorited(!favorited);
  };

  const toggleDelete = () => {
    // Abre o modal de confirmação antes de excluir
    if(!dreamData.deleted){
      setIsDeleteModalVisible(true);
    }else{
      realm.write(() => {
        const dream = realm.objectForPrimaryKey(DreamSchema, dreamData._id);
        dream.deleted = false;
      });
      navigation.goBack();
    }
  };

  const confirmDelete = () => {
    try {
      realm.write(() => {
        const dream = realm.objectForPrimaryKey(DreamSchema, dreamData._id);
        dream.deleted = true;
      });

      // Fecha o modal e navega de volta
      setIsDeleteModalVisible(false);
      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  };

  const cancelDelete = () => {
    // Fecha o modal sem excluir
    setIsDeleteModalVisible(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      windowSoftInputMode="adjustResize"
    >
      <Background>
        <Header 
          navigation={navigation}
          toggleFavorite={toggleFavorite}
          toggleDelete={toggleDelete}
          favorited={favorited}
          deleted={dreamData.deleted}
        />

        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
          <DreamDetails dreamData={dreamData} />
        </ScrollView>

        <DreamFooter style={{ justifyContent: 'flex-end' }}>
          <DegradeButton
            onPress={() =>
              navigation.navigate('DrawerNavigator', {
                screen: 'HomeNavigator',
                params: {
                  screen: 'WriteDreams',
                  params : {
                    screen: 'WriteHome',
                    params : {
                      idDream: dreamData._id
                    }
                  },
                }
              })
            }
            iconFile={require('@assets/icons/pen.png')}
            iconWidth={27}
            iconHeight={27}
          />
        </DreamFooter>


        <AlertModal
          visible={isDeleteModalVisible}
          content="Deseja apagar o sonho?"
          button1Text='APAGAR'
          button2Text='CANCELAR'
          onRequestButton1={confirmDelete}
          onRequestButton2={cancelDelete}
          button1Color="#BD2E32"
          onClose={() => setIsDeleteModalVisible(false)}
        />
      </Background>
    </KeyboardAvoidingView>
  );
};

export default EndDreamScreen;
