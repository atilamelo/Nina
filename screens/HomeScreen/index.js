import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { DreamSchema } from '@databases/schemas/DreamSchema';
import { useQuery, useRealm } from '@databases/realm';
import HomeScreenModel from '@components/HomeScreenModel/HomeScreenModel';
import { useFocusEffect } from '@react-navigation/native';

/**
 * Returns an array of dreams sorted by date and filtered to exclude deleted dreams.
 */
const getdreamData = ( realm ) => {
    return realm.objects(DreamSchema).filtered('deleted = false')
  };

const HomeScreen = () => {
    const realm = useRealm();
    const [dreamData, setDreamData] = useState(getdreamData(realm));

    useFocusEffect(
        React.useCallback(() => {
            setDreamData(getdreamData(realm));
        }, [])
    );

    return (
        <HomeScreenModel 
            dreamData={dreamData}
            title={"Todos os sonhos"}
            showSearch={true}
            showSort={true}
        />
    );
};

export default HomeScreen;
