/* Creator: Carla Heloisa
 * Data: 13/09/2023
 * Description: Os sonhos favoritados ficarão aqui
 */

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { DreamSchema } from '@databases/schemas/DreamSchema';
import { useQuery } from '@databases/realm';
import HomeScreenModel from '@components/HomeScreenModel/HomeScreenModel';
import Barra from '@components/Barra';

/**
 * Returns an array of dreams sorted by date and filtered to exclude deleted dreams.
 */
const getdreamData = () => {
    return JSON.parse(JSON.stringify(useQuery(DreamSchema).filtered('deleted = true')));
  };

const Trash = ({ navigation }) => {
    return (
        <HomeScreenModel 
            dreamData={getdreamData()}
            title={"Lixeira"}
            showSearch={true}
            showSort={true}
        >
            <Text style={styles.text}> Os sonhos na lixeira serão apagados após 30 dias</Text>
            <View style={styles.barraContainer}>
                <Barra/>
            </View>
            
        </HomeScreenModel>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Inter Regular',
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
        color: '#a5acc6',
    },
    barraContainer: {
        paddingBottom: 15,
    }
})

export default Trash;