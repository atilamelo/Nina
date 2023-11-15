import React from 'react';
import { TouchableOpacity, Image, Text, View, useWindowDimensions } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

const sizeIcon = 21;

export const Button = ({ source, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ padding: 10 }}>
        <Image
          source={source}
          resizeMode='contain'
          style={{ width: sizeIcon, height: sizeIcon }}
        />
      </View>
    </TouchableOpacity>
  );
}

export const Title = ({ children: text }) => {
  const { width } = useWindowDimensions();
  const fontSize = RFValue(9.5, width);

  return (
    <Text style={{
      color: 'white',
      fontSize,
      fontFamily: 'Inter Medium',
    }}>
      {text}
    </Text>
  );
}
