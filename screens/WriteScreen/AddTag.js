/* Creator: Átila Melo
 * Data: 28/06/2023
 * Description: Calendar Screen that will show the registered dreams based on the day selected by the use
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Background from '@components/Background';
import Search from '@components/Search';

const AddTag = ({ navigation }) => {
    return (
        <Background>
            <Search navigation={navigation} placeholder="Insira o nome da Tag" />
        </Background>
    );
}

export default AddTag;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})