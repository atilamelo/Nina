import { Text } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native';
import { ScreenContainer } from './style'

export default function Screen2() {
  const { width } = useWindowDimensions();

  return (
    <ScreenContainer windowWidth={width}>
      <Text>O que você sentiu nesse sonho? </Text>
    </ScreenContainer>
  )
}