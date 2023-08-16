import React from 'react'
import WriteScreen from '../screens/WriteScreen';
import DreamRecordScreen from '../screens/WriteScreen/DreamRecordScreen';
import GenerateImageScreen from '../screens/WriteScreen/ImageScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function WriteNavigator() {
  return (
      <Stack.Navigator initialRouteName="WriteHome">
        <Stack.Screen
          name="WriteHome"
          component={WriteScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DreamRec"
          component={DreamRecordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DreamImage"
          component={GenerateImageScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  )
}