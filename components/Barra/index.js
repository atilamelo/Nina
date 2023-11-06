import React from 'react';
import { View, StyleSheet } from 'react-native';

const Barra = ({ marginTop }) => {
  return <View style={styles.barra(marginTop)} />;
};

const styles = StyleSheet.create({
  barra: (marginTop) => ({
    alignSelf: 'center',
    borderBottomColor: '#3F4A73',
    borderBottomWidth: 0.8,
    width: '90%',
    marginTop: marginTop,
  }),
});

export default Barra;
