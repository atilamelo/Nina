import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from '@screens/FavoriteScreen/Favorites';
import Trash from '@screens/TrashScreen/Trash';
import HomeNavigator from '@navigators/HomeNavigator'; // Importe o seu HomeNavigator
import DrawerContent from '@components/DrawerContent'; // Crie um componente para o conteúdo do Drawer (vamos chamá-lo de DrawerContent)
import TagScreen from '@screens/TagScreen';


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
        <Drawer.Screen 
          name="AddTag" 
          component={TagScreen}
          initialParams={{
            drawer: true
          }}
        />
        
      </Drawer.Navigator>
    );
  };
  

export default DrawerNavigation;
