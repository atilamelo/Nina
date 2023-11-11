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

const DrawerContent = ({ navigation, state }) => {
  const [todosSonhosCount, setTodosSonhosCount] = useState(null);
  const [lixeiraCount, setLixeiraCount] = useState(null);
  const [favoritosCount, setFavoritosCount] = useState(null);
  const [tagsCount, setTagsCount] = useState(null);
  const realm = useRealm();
  const routes = state.routes;
  const [activeRoute, setActiveRoute] = useState(''); // Adicione esta linha
  function updateCounter() {
    const currentRoute = routes[state.index].name; // Obtém o nome da rota atual
    setActiveRoute(currentRoute); // Atualiza o estado activeRoute
    dreamObjects = realm.objects(DreamSchema)
    setTodosSonhosCount(dreamObjects.filtered('deleted = false').length)
    setLixeiraCount(dreamObjects.filtered('deleted = true').length)
    setFavoritosCount(dreamObjects.filtered('favorite = true').length)
    setTagsCount(realm.objects(TagSchema).length)
  }

  useEffect(() => {
    updateCounter();
  }, [state.index]);

  const renderMenuItem = (icon, text, count, onPress, routeName) => {
    const isActive = activeRoute === routeName;
    return (
      <MenuItem onPress={onPress} imagem={icon} menuItemText={text} count={count} isActive={isActive} />
    );
  };

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

        {renderMenuItem(homeIcon, 'Todos os sonhos', todosSonhosCount, () => navigateAndCloseDrawer('HomeNavigator'), 'HomeNavigator')}
        {renderMenuItem(trashIcon, 'Lixeira', lixeiraCount, () => navigateAndCloseDrawer('Trash'), 'Trash')}
        {renderMenuItem(favoritesIcon, 'Favoritos', favoritosCount, () => navigateAndCloseDrawer('FavoriteScreen'), 'FavoriteScreen')}
        {renderMenuItem(tagIcon, 'Tags', tagsCount, () => navigateAndCloseDrawer('AddTag'), 'AddTag')}

      </Content>
    </Background>
  );
};

export default DrawerContent;

const Content = styled.View`
  margin-horizontal: 30px;
  margin-top: 20%;
  gap: 5px;
`;