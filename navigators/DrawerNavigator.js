import React from 'react';
import HomeScreen from '@screens/HomeScreen'; // Importe a tela HomeScreen
import FavoriteScreen from '@screens/HomeScreen/Favorites';
import Trash from '@screens/HomeScreen/Trash';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from '@navigators/HomeNavigator'; // Importe o seu HomeNavigator
import DrawerContent from '@components/DrawerContent'; // Crie um componente para o conteúdo do Drawer (vamos chamá-lo de DrawerContent)
import HomeTab from '@navigators/HomeNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
      <Drawer.Navigator
        initialRouteName="HomeNavigator"
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          headerShown: false, // Ocultar o cabeçalho nas telas do Drawer
        }}
        drawerContentStyle={{
        width: '870%', // Ajuste o tamanho do Drawer conforme necessário
      }}
      >
        <Drawer.Screen name="HomeNavigator" component={HomeNavigator} />
        <Drawer.Screen name="FavoriteScreen" component={FavoriteScreen} />
        <Drawer.Screen name="Trash" component={Trash} />
      </Drawer.Navigator>
    );
  };
  

export default DrawerNavigation;
