import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRealm, useQuery } from '@databases/realm';
import { TagSchema } from '@databases/schemas/TagSchema';
import { DreamSchema } from '@databases/schemas/DreamSchema';
import styled from 'styled-components/native';
import Background from '@components/Background';
import MenuItem from '@components/DrawerContent/MenuItem';

import homeIcon from '@assets/icons/home.png'; 
import favoritesIcon from '@assets/icons/favoritos.png'; 
import trashIcon from '@assets/icons/lixo.png';
import tagIcon from '@assets/icons/tag.png'; 

const DrawerContent = ({ navigation }) => {
  const [todosSonhosCount, setTodosSonhosCount] = useState(null);
  const [lixeiraCount, setLixeiraCount] = useState(null);
  const [favoritosCount, setFavoritosCount] = useState(null);
  const [tagsCount, setTagsCount] = useState(null);
  const realm = useRealm();

  function updateCounter() {
    dreamObjects = realm.objects(DreamSchema)
    setTodosSonhosCount(dreamObjects.filtered('deleted = false').length)
    setLixeiraCount(dreamObjects.filtered('deleted = true').length)
    setFavoritosCount(dreamObjects.filtered('favorite = true').length)
    setTagsCount(realm.objects(TagSchema).length)
  }
  
  useEffect(() => {
    updateCounter();
  })

  const renderMenuItem = (icon, text, count, onPress) => (
    <MenuItem onPress={onPress} imagem={icon} menuItemText={text} count={count}/>
  );

  useEffect(() => {
    dreamObjects = realm.objects(DreamSchema)
    setTodosSonhosCount(dreamObjects.length)
    setLixeiraCount(dreamObjects.filtered('deleted = true').length)
    setFavoritosCount(dreamObjects.filtered('favorite = true').length)
    setTagsCount(realm.objects(TagSchema).length)
  }, []);

  const navigateAndCloseDrawer = (screenName) => {
    navigation.navigate(screenName);
    navigation.closeDrawer();
  };

  return (
    <Background>
      <Content>
        
        {renderMenuItem(homeIcon, 'Todos os sonhos', todosSonhosCount, () => navigateAndCloseDrawer('Home'))}
        {renderMenuItem(trashIcon, 'Lixeira', lixeiraCount, () => navigateAndCloseDrawer('Trash'))}
        {renderMenuItem(favoritesIcon, 'Favoritos', favoritosCount, () => navigateAndCloseDrawer('FavoriteScreen'))}
        {renderMenuItem(tagIcon, 'Tags', tagsCount, () => navigateAndCloseDrawer('AddTag'))}

        
      </Content>
    </Background>
  );
};

export default DrawerContent;

const Content = styled.View`
  margin-horizontal: 30px;
  margin-top: 25%;
  gap: 35px;
`;
