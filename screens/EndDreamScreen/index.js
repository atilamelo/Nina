import React, { useEffect, useState } from 'react';
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

const dreamById = ( realm, id ) => {
  const dream = realm.objectForPrimaryKey(DreamSchema, id);
  return dream;
}

const EndDreamScreen = ({ route, navigation }) => {
  const realm = useRealm();
  const [dreamData, setDreamData] = useState();
  const [favorited, setFavorited] = useState();
  const [deleted, setDeleted] = useState();
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  
  useEffect(() => {
    const realmObject = realm.objectForPrimaryKey(DreamSchema, route.params.props._id);
    const dreamData = JSON.parse(JSON.stringify(realmObject));
    setDreamData(dreamData);
    setFavorited(dreamData.favorite)
    setDeleted(dreamData.deleted)
  }, [])

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
    setIsDeleteModalVisible(true);
  };

  const toggleRestore = () => {
    realm.write(() => {
      const dream = realm.objectForPrimaryKey(DreamSchema, dreamData._id);
      dream.deleted = false;
      dream.deletedAt = null;
    });

    navigation.goBack();
  }

  const confirmDelete = () => {
    try {
      navigation.goBack();

      if (!deleted) {
        realm.write(() => {
          const dream = realm.objectForPrimaryKey(DreamSchema, dreamData._id);
          dream.deleted = true;
          dream.deletedAt = new Date();
        });
      } else {
        realm.write(() => {
          const dream = realm.objectForPrimaryKey(DreamSchema, dreamData._id);
          realm.delete(dream);
        });
      }

      // Fecha o modal e navega de volta
      setIsDeleteModalVisible(false);
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
          toggleRestore={deleted ? toggleRestore : null}
          favorited={favorited}
          deleted={deleted}
        />
        {
          dreamData &&
        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
          <DreamDetails dreamData={dreamData} />
        </ScrollView>
        }
        
        <DreamFooter style={{ justifyContent: 'flex-end' }}>
          <DegradeButton
            onPress={() =>
              navigation.navigate('DrawerNavigator', {
                screen: 'HomeNavigator',
                params: {
                  screen: 'WriteDreams',
                  params: {
                    screen: 'WriteHome',
                    params: {
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
          content={!deleted ? "Deseja apagar o sonho?" : "Tem certeza de que deseja apagar o sonho? Essa ação é IRREVERSÍVEL"}
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
