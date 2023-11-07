import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from '@screens/FavoriteScreen/Favorites';
import Trash from '@screens/TrashScreen/Trash';
import HomeNavigator from '@navigators/HomeNavigator'; // Importe o seu HomeNavigator
import DrawerContent from '@components/DrawerContent'; // Crie um componente para o conteúdo do Drawer (vamos chamá-lo de DrawerContent)
import TagScreen from '@screens/TagScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const sideMenuDisabledScreens = ['WriteDreams']

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeNavigator"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false, // Ocultar o cabeçalho nas telas do Drawer
        drawerActiveBackgroundColor: "pink",
      }}
      
      drawerContentStyle={{
        width: '870%', // Ajuste o tamanho do Drawer conforme necessário
      }}
      >
        <Drawer.Screen name="HomeNavigator" 
          component={HomeNavigator}
          options={({ route }) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? 'Login'
            if (sideMenuDisabledScreens.includes(routeName))
                return ({swipeEnabled: false})
          }} 
          />
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
