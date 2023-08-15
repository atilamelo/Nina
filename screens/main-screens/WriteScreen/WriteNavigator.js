import {} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WriteScreen from './WriteScreen';

const Stack = createStackNavigator();

export default function WriteNavigator() {
  return (
      <Stack.Navigator initialRouteName="WriteHome">
        <Stack.Screen
          name="WriteHome"
          component={WriteScreen}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
  )
}