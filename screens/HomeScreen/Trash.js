/* Creator: Carla Heloisa
 * Data: 13/09/2023
 * Description: Os sonhos favoritados ficarão aqui
 */

import React from 'react';
import { Text } from 'react-native';
import { DreamSchema } from '@databases/schemas/DreamSchema';
import { useQuery } from '@databases/realm';
import HomeScreenModel from './HomeScreenModel';


/**
 * Returns an array of dreams sorted by date and filtered to exclude deleted dreams.
 */
const getdreamData = () => {
    return useQuery(DreamSchema).filtered('deleted = true');
  };

const Trash = ({ navigation }) => {
    return (
        <HomeScreenModel dreamData={getdreamData()}>
            <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>Lixeira</Text>
        </HomeScreenModel>
    );
}

export default Trash;