/* Creator: Átila Melo
 * Data: 28/06/2023
 * Description: Calendar Screen that will show the registered dreams based on the day selected by the use
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Background from '@components/Background';

const CalendarScreen = ({ navigation }) => {
    return (
        <Background>
            <View style={styles.container}>
                <Text>Calendario Screen</Text>
            </View>
        </Background>
    );
}

export default CalendarScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})