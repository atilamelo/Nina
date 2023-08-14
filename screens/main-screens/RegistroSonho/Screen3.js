import { Text } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native';
import { ScreenContainer } from './style'

export default function Screen3() {
  const { width } = useWindowDimensions();

  return (
    <ScreenContainer windowWidth={width}>
      <Text>Screen3</Text>
    </ScreenContainer>
  )
}