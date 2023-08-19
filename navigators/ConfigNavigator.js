import React from 'react'
import ConfigScreen from '../screens/ConfigScreen';
import Notificacoes from '../screens/ConfigScreen/ConfigItemScreen/Notificacoes';
import { createStackNavigator } from '@react-navigation/stack';
import DreamContext from '../contexts/DreamContext';

const Stack = createStackNavigator();

export default function WriteNavigator() {
  return (
    <DreamContext>
      <Stack.Navigator initialRouteName="ConfigScreen">
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
      </Stack.Navigator>
    </DreamContext>
  )
}