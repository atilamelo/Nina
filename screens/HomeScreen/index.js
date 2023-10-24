import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { DreamSchema } from '@databases/schemas/DreamSchema';
import { useQuery } from '@databases/realm';
import Background from '@components/Background';
import OptionsModal from '@components/Modals/OptionsModal';
import HomeHeader from './HomeHeader';
import HomeContent from './HomeContent';

/**
 * Returns an array of dreams sorted by date and filtered to exclude deleted dreams.
 */
const getSortedDreams = () => {
  return useQuery(DreamSchema).sorted('date', true).filtered('deleted = false');
};

/**
 * The home screen component.
 */
const HomeScreen = ({ navigation }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);

  /**
   * Toggles the visibility of the options modal.
   */
  const toggleOptionsModal = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  return (
    <Background>
      <View style={styles.container}>
        <HomeHeader toggleOptionsModal={toggleOptionsModal} />
        <HomeContent getSortedDreams={getSortedDreams} />
      </View>
      <OptionsModal isVisible={isOptionsVisible} onClose={toggleOptionsModal} />
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;