import React from 'react';
import { View, StyleSheet } from 'react-native';

const Barra = () => {
  return <View style={styles.barra} />;
};

const styles = StyleSheet.create({
  barra: {
    alignSelf: 'center',
    borderBottomColor: '#3F4A73',
    borderBottomWidth: 2,
    width: '90%',
    marginTop: 30,
  },
});

export default Barra;
