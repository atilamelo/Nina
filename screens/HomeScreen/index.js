import React from 'react';
import { View, Text } from 'react-native';
import { DreamSchema } from '@databases/schemas/DreamSchema';
import { useQuery } from '@databases/realm';
import HomeScreenModel from '@components/HomeScreenModel/HomeScreenModel';

/**
 * Returns an array of dreams sorted by date and filtered to exclude deleted dreams.
 */
const getdreamData = () => {
    return useQuery(DreamSchema).filtered('deleted = false');
  };

const HomeScreen = () => {
    return (
        <HomeScreenModel 
            dreamData={getdreamData()}
            title={"Todos os sonhos"}
            showSearch={true}
            showSort={true}
        />
    );
};

export default HomeScreen;
