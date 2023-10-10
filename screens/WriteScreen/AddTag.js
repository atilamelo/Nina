import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, Alert, Image } from 'react-native';
import { useRealm, useQuery } from '@databases/realm';
import { TagSchema } from '@databases/schemas/TagSchema';
import uuid from 'react-native-uuid';
import Background from '@components/Background';
import Search from '@components/Search';
import styled from 'styled-components/native';
import Tags from '@components/Tags';

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

const AddTag = ({ navigation }) => {
  // Estado para armazenar o texto da pesquisa
  const [searchQuery, setSearchQuery] = useState('');
  const [tags, setTags] = useState([]);
  const realm = useRealm();

  // Função chamada ao pressionar o botão
  const addTag = () => {
    try{
      const existingTag = realm.objects(TagSchema).filtered('name = $0', searchQuery)[0];
      console.log(existingTag)
        
      if(existingTag == undefined || existingTag.length > 0){
        realm.write(() => {
          realm.create('Tag', {
            _id: uuid.v4(),
            name: searchQuery,
          });
        });
  
        if(__DEV__){
          Alert.alert("Tag", "Tag salva com sucesso!");
        }
        
      }else{

        if(__DEV__){
          Alert.alert("Tag", "Tag já existente!");
        }

      }

    } catch (e) {
      console.log(e);

      if(__DEV__){
        Alert.alert("Tag", "Problema ao salvar a tag!");
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

    return () => {
      subscription.removeAllListeners();
    };
  }, []);

  return (
    <Background>
      <Search
        navigation={navigation}
        placeholder="Insira o nome da Tag"
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />

    <Container>
      {tags.map((tag) => (
        <Tags
          key={tag._id}
          text={tag.name}
          marginTop="8%"
        />
      ))}

        <Content onPress={addTag}>
          <Imagem source={mais} />
          <TagText>Criar tag "{searchQuery}"</TagText>
        </Content>
      </Container>
    </Background>
  );
};

export default AddTag;