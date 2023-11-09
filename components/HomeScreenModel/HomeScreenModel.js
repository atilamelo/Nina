import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { sortOptions } from '../Modals/OptionsModal';
import Background from '@components/Background';
import OptionsModal from '@components/Modals/OptionsModal';
import HomeHeader from '@components/Headers/HomeHeader';
import DreamCard from './DreamCard';

const sortDreamData = (dreamData, option) => {
  const sortFunctions = {
    title: (a, b) => a.title.localeCompare(b.title),
    creationDate: (a, b) => new Date(b.creationDate) - new Date(a.creationDate),
    modificationDate: (a, b) => new Date(b.modificationDate) - new Date(a.modificationDate),
  };

  return [...dreamData].sort(sortFunctions[option] || (() => { }));
};

const HomeScreenModel = ({ title, dreamData, children, showSearch, showSort }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [sortedDreamData, setSortedDreamData] = useState(sortDreamData(dreamData, sortOptions[1].value));
  const [viewGrid, setViewGrid] = useState(true);

  useEffect(() => {
    setSortedDreamData(sortDreamData(dreamData, sortOptions[1].value));
  }, [dreamData]);

  const toggleOptionsModal = () => setOptionsVisible(!isOptionsVisible);
  const toggleView = () => setViewGrid(!viewGrid);
  const onSortSelection = (option) => setSortedDreamData(sortDreamData(dreamData, option));

  const evenDreams = sortedDreamData.filter((_, index) => index % 2 === 0);
  const oddDreams = sortedDreamData.filter((_, index) => index % 2 !== 0);

  return (
    <Background>
      <View style={styles.container}>
        <HomeHeader
          toggleOptionsModal={toggleOptionsModal}
          toggleView={toggleView}
          title={title}
          showSearch={showSearch}
          showSort={showSort}
          showView={true}
          viewGrid={viewGrid}
          dreamData={dreamData}
        />

        {children}

        <ScrollView contentContainerStyle={styles.mainContainer} nestedScrollEnabled={true}>


          {
            viewGrid ? (
              <>

                <View style={styles.dreamGrid}>
                  {evenDreams.map((dream) => (
                    <DreamCard dream={dream} key={dream._id} />
                  ))}
                </View>

                <View style={styles.dreamGrid}>
                  {oddDreams.map((dream) => (
                    <DreamCard dream={dream} key={dream._id} />
                  ))}
                </View>

              </>
            ) : (
              <>
                <View style={styles.dreamList}>
                  {sortedDreamData.map((dream) => (
                    <DreamCard dream={dream} key={dream._id} />
                  ))}
                </View>
              </>
            )
          }

        </ScrollView>

        <OptionsModal
          isVisible={isOptionsVisible}
          onClose={toggleOptionsModal}
          onSortSelection={onSortSelection}
          defaultSortOption={sortOptions[1].value}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    paddingBottom: 90,
  },
  dreamList: {
    width: '100%',
  },
  dreamGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '49%',
  },
});

export default HomeScreenModel;