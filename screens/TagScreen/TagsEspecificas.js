/* Creator: Carla Heloisa
 * Data: 13/09/2023
 * Description: Os sonhos favoritados ficarão aqui
 */

import React from 'react';
import { DreamSchema } from '@databases/schemas/DreamSchema';
import { useQuery } from '@databases/realm';
import { Text } from 'react-native';
import HomeScreenModel from '@components/HomeScreenModel/HomeScreenModel';

/**
 * Returns an array of dreams sorted by date and filtered to exclude deleted dreams.
 */
const getdreamData = () => {
    return useQuery(DreamSchema).filtered('favorite = true');
  };

const TagsEspecificas = ({ navigation }) => {
    return (
        <HomeScreenModel 
            dreamData={getdreamData()}
            title={"Tags"}
            showSearch={true}
            showSort={true}
        />
    );
}

export default TagsEspecificas;