import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { DreamSchema } from '@databases/schemas/DreamSchema';
import { useQuery, useRealm } from '@databases/realm';
import HomeScreenModel from '@components/HomeScreenModel/HomeScreenModel';

/**
 * Returns an array of dreams sorted by date and filtered to exclude deleted dreams.
 */
const getdreamData = ( realm ) => {
    return realm.objects(DreamSchema).filtered('deleted = false')
  };

const HomeScreen = () => {
    const realm = useRealm();
    const [dreamData, setDreamData] = useState(getdreamData(realm));

    function onRealmChange() {
        console.log("Realm changed")
        setDreamData(getdreamData(realm));
    }

    try {
        realm.addListener("change", onRealmChange);
    } catch (error) {
        console.error(`An exception was thrown within the change listener: ${error}`)
    }

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
