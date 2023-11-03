import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native'
import { NavigationContext } from '@react-navigation/native';
import { sortOptions } from '../Modals/OptionsModal';
import DreamBox from '@components/DreamBox';
import Background from '@components/Background';
import OptionsModal from '@components/Modals/OptionsModal';
import HomeHeader from '@components/Headers/HomeHeader';

const sortDreamData = (dreamData, option) => {
  switch (option) {
    case 'title':
      return [...dreamData].sort((a, b) => a.title.localeCompare(b.title));
    case 'creationDate':
      return [...dreamData].sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
    case 'modificationDate':
      return [...dreamData].sort((a, b) => new Date(b.modificationDate) - new Date(a.modificationDate));
    default:
      return dreamData;
  }
};

const defaultSortOption = sortOptions[1].value;

/**
 * The home screen component.
 */
const HomeScreenModel = ({ title, dreamData, children, showSearch, showSort }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [sortedDreamData, setSortedDreamData] = useState(sortDreamData(dreamData, defaultSortOption));
  const navigation = useContext(NavigationContext);

  useEffect(() => {
    setSortedDreamData(sortDreamData(dreamData, defaultSortOption))
  }, [ dreamData ])

  /**
   * Toggles the visibility of the options modal.
   */
  const toggleOptionsModal = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  const onSortSelection = ( option ) => {
    setSortedDreamData(sortDreamData(dreamData, option));
  }

  return (
    <Background>
      <View style={styles.container}>
        <HomeHeader 
          toggleOptionsModal={toggleOptionsModal}
          title={title}
          showSearch={showSearch}
          showSort={showSort}
          dreamData={dreamData}
        />
        { children }

        <FlatList
            data={sortedDreamData}
            renderItem={({ item }) => <DreamBox item={item} navigation={navigation} />}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ paddingBottom: 90 }}
        />

      </View>

      <OptionsModal 
        isVisible={isOptionsVisible} 
        onClose={toggleOptionsModal} 
        onSortSelection={onSortSelection}
        defaultSortOption={defaultSortOption}
      />
    
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreenModel;