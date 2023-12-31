import React from 'react'
import ConfigScreen from '../screens/ConfigScreen';
import Notificacoes from '../screens/ConfigScreen/ConfigItemScreen/Notificacoes';
import Backup from '../screens/ConfigScreen/ConfigItemScreen/Backup';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import DreamContext from '../contexts/DreamContext';
import FaleConosco from '../screens/ConfigScreen/ConfigItemScreen/FaleConosco';

const Stack = createStackNavigator();

export default function ConfigStack() {
  return (
    <DreamContext>
      <Stack.Navigator
        initialRouteName="ConfigScreen"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Transição horizontal entre os elementos
          gestureDirection: 'horizontal', 
          ...TransitionPresets.SlideFromRightIOS, 
        }}
      >
        <Stack.Screen
          name="ConfigScreen"
          component={ConfigScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notificacoes"
          component={Notificacoes}
          options={{ headerShown: false }}
          tabBarStyle= {{display: 'none'}}
        />
        <Stack.Screen
          name="Backup"
          component={Backup}
          options={{ headerShown: false }}
          tabBarStyle= {{display: 'none'}}
        />
        <Stack.Screen
          name="FaleConosco"
          component={FaleConosco}
          options={{ headerShown: false }}
          tabBarStyle= {{display: 'none'}}
        />
      </Stack.Navigator>
    </DreamContext>
  )
}