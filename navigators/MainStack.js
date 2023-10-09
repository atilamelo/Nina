import React from 'react'
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import DreamContext from '../contexts/DreamContext';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
import EndDreamScreen from '../screens/EndDreamScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function ConfigStack() {
  return (
    <DreamContext>
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName="DrawerNavigator"
            screenOptions={{
            headerShown: false, 
            }}
            >
            <Stack.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{ headerShown: false }} 
            />

            <Stack.Screen
                name="EndDreamScreen"
                component={EndDreamScreen}
                options={{ headerShown: false }} 
            />
        </Stack.Navigator>
      </NavigationContainer>
    </DreamContext>
  )
}