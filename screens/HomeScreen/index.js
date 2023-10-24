import React from 'react';
import { View, Text } from 'react-native';
import { DreamSchema } from '@databases/schemas/DreamSchema';
import { useQuery } from '@databases/realm';
import HomeScreenModel from './HomeScreenModel';

/**
 * Returns an array of dreams sorted by date and filtered to exclude deleted dreams.
 */
const getdreamData = () => {
    return useQuery(DreamSchema).filtered('deleted = false');
  };

const HomeScreen = () => {
    return (
        <HomeScreenModel dreamData={getdreamData()}>
            <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>Todos os sonhos</Text>
        </HomeScreenModel>
    );
};

export default HomeScreen;
