/* Creator: Átila Melo
 * Data: 28/06/2023
 * Description: Home Screen that will show the registered dreams
 */

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import DreamBox from '../../components/DreamBox';

const HomeScreen = ({ navigation }) => {

    // Esses dados serão usados como exemplo enquanto o back-end não for implementado
    const [dreamsExample, setDreamsExample] = useState([
        {
            resumedText: "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Curab risus sem, ornare in tellus vitae, faucibus mollis ipsum. condimentum finibus.",
            title: "Lorem Ipsum",
            data: "5 de julho"
        },
        {
            resumedText: "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Curab risus sem, ornare in tellus vitae, faucibus mollis ipsum. condimentum finibus.",
            title: "Lorem Ipsum",
            data: "5 de julho"
        },

    ])

    return (
        <View style={styles.container}>
            {/* O header virar aqui quando estiver configurado */}
            <View style={styles.content}>
                {/* Uma lista de sonhos da HomeScreen, baseado na Hook useState */}
                <View style={styles.dreamsList}>
                    <FlatList
                        data={dreamsExample}
                        renderItem={({ item }) => (
                            <DreamBox item={item} />
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        backgroundColor: '#1A1F32'
    },
    content: {
        flex: 1,
    },
    dreamsList: {
        flex: 1,
    }
})