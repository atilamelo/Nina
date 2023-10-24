import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Background from '@components/Background';
import OptionsModal from '@components/Modals/OptionsModal';
import HomeHeader from '@components/Headers/HomeHeader';
import HomeContent from './HomeContent';

/**
 * The home screen component.
 */
const HomeScreenModel = ({ title, dreamData, children, showSearch, showSort }) => {
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
        <HomeHeader 
          toggleOptionsModal={toggleOptionsModal}
          title={title}
          showSearch={showSearch}
          showSort={showSort}
        />
        { children }
        <HomeContent dreamData={dreamData} />
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

export default HomeScreenModel;