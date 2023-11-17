import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, Alert, Image } from 'react-native';
import { useRealm } from '@databases/realm';
import { TagSchema } from '@databases/schemas/TagSchema';
import uuid from 'react-native-uuid';
import Background from '@components/Background';
import styled from 'styled-components/native';
import Tags from '@components/Tags';
import SearchHeader from '@components/Headers/SearchHeader';
import WarningModal from '@components/Modals/WarningModal';
import AlertModal from '@components/Modals/AlertModal';
import { ScrollView } from 'react-native';

import mais from '@assets/icons/mais.png';

const Container = styled(View)`
  flex: 1;
  align-self: flex-start;
  margin-left: 8%;
`;

const Imagem = styled(Image)`
  width: 25.667px;
  height: 26px;
  tint-color: #9F238E;
  margin-right: 40px;
`;

const Content = styled(TouchableOpacity)`
  flex-direction: row;
  margin-top: 8%; 
`;

const TagText = styled(Text)`
  color: white;
  font-size: 15px;
  font-family: 'Inter Regular';
`;

const AddTag = ({ route }) => {
  // Estado para armazenar o texto da pesquisa
  const [searchQuery, setSearchQuery] = useState('');
  const [tags, setTags] = useState([]);
  const { drawer } = route.params;
  const realm = useRealm();
  const [modalVisible, setModalVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [textAlert, setTextAlert] = useState(null);

  const openModal = (tag) => {
    setSelectedTag(tag);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openAlert = (textAlert) => {
    setAlertVisible(true);
    setTextAlert(textAlert);
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  // Lógica para apagar a tag
  const apagarTag = () => {
    // Implemente a lógica conforme necessário
  };

  // Função chamada ao pressionar o botão
  const addTag = () => {
    try {
      const existingTag = realm.objects(TagSchema).filtered('name = $0', searchQuery)[0];

      if (existingTag == undefined || existingTag.length > 0) {
        realm.write(() => {
          realm.create('Tag', {
            _id: uuid.v4(),
            name: searchQuery,
          });
        });

        if (__DEV__) {
          openAlert("Tag salva com sucesso!");
        }

        setSelectedTag({ _id: uuid.v4(), name: searchQuery }); // Defina a tag selecionada
      } else {
        if (__DEV__) {
          openAlert("Já existe uma tag com esse nome!");
        }
      }

    } catch (e) {
      console.log(e);

      if (__DEV__) {
        openAlert("Problema ao salvar a tag!");
      }
    }
  };

  const getAllTags = () => {
    return realm.objects(TagSchema);
  };

  useEffect(() => {
    const tags = getAllTags();
    setTags(tags);
  }, []);

  useEffect(() => {
    const subscription = realm.objects(TagSchema).addListener(() => {
      const tags = getAllTags();
      setTags(tags);
    });
  }, []);

  return (
    <Background>
      <SearchHeader
        drawer={drawer}
        placeholder={'Insira o nome da Tag'}
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
      
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>

        <Container>
          {tags.map((tag, index) => (
            <Tags
              key={tag._id}
              text={tag.name}
              marginTop={index > 0 ? "8%" : undefined}
              onPress={() => openModal(tag)}
            />
          ))}

          <Content onPress={addTag}>
            <Imagem source={mais} />
            <TagText>Criar tag "{searchQuery}"</TagText>
          </Content>
        </Container>
      </ScrollView>

      <AlertModal
        visible={modalVisible}
        content={`Deseja apagar a tag "${selectedTag ? selectedTag.name : ''}"?`}
        button1Text='APAGAR'
        onClose={closeModal}
        onRequestButton1={apagarTag}
        button1Color="#BD2E32"
      />

      <WarningModal
        visible={alertVisible}
        content="Tag"
        description={textAlert}
        onClose={closeAlert}
      />
    </Background>
  );
};

export default AddTag;