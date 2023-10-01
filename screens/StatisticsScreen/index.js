/* Creator: Átila Melo
 * Data: 28/06/2023
 * Description: Statistics Screen that will show the statistics of the user based on dreams
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Background from '@components/Background';

const StatisticsScreen = ({navigation}) => {
    return (
        <Background>
            <View style={styles.container}>
                <Text>Estatisticas Screen</Text>
            </View>
        </Background>
    );
}

export default StatisticsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})