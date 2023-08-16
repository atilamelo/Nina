import { Text } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native';
import { ScreenContainer } from './style'

export default function Step1() {
  const { width } = useWindowDimensions();

  return (
    <ScreenContainer windowWidth={width}>
      <Text>Screen3</Text>
    </ScreenContainer>
  )
}