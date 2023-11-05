import React from 'react'
import WriteScreen from '@screens/WriteScreen';
import DreamRecordScreen from '@screens/WriteScreen/DreamRecordScreen';
import GenerateImageScreen from '@screens/WriteScreen/ImageScreen';
import TagScreen from '@screens/TagScreen';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import DreamContext from '@contexts/DreamContext';

const Stack = createStackNavigator();

export default function WriteStack() {
  return (
    <DreamContext>
      <Stack.Navigator initialRouteName="WriteHome"
      screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Transição horizontal entre os elementos
        }}>
        <Stack.Screen
          name="WriteHome"
          component={WriteScreen}
          options={{ headerShown: false}}
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
        <Stack.Screen
          name="AddTag"
          component={TagScreen}
          options={{ headerShown: false }}
          initialParams={{
              drawer: false
            }
          }
        />
      </Stack.Navigator>
    </DreamContext>
  )
}