/* Creator: Átila Melo
 * Data: 28/06/2023
 * Description: Home Screen that will show the registered dreams
 */

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {

    const [dreamsExample, setDreamsExample] = useState([
        {
            resumedText: "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Curab risus sem, ornare in tellus vitae, faucibus mollis ipsum. condimentum finibus.",
            img_url: "https://picsum.photos/200/300",
            title: "Lorem Ipsum",
            data: "5 de julho"
        },
        {
            resumedText: "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Curab risus sem, ornare in tellus vitae, faucibus mollis ipsum. condimentum finibus.",
            img_url: "https://picsum.photos/200/300",
            title: "Lorem Ipsum",
            data: "5 de julho"
        },
        
    ])

    return (
        <View style={styles.container}>
            {/* Header will come here */}
            <View style={styles.content}>
                <View style={styles.dreamsList}>
                    <FlatList
                        data={dreamsExample}
                        renderItem={({ item }) => (
                            <View style={styles.dreamBox}>
                                <View style={styles.mainCardDream}>
                                    <Text style={styles.text}>{item.resumedText}</Text>
                                    <Image style={styles.dreamImage} source={{ uri: item.img_url }} />
                                </View>
                                <Text style={styles.text}>{item.title}</Text>
                                <Text style={styles.text}>{item.data}</Text>
                            </View>
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
        flexDirection: 'row',

    },
    dreamBox: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    mainCardDream: {

        backgroundColor: '#2B314C',
    },
    text: {
        color: '#fff'
    },
    dreamImage: {
        width: 250,
        height: 250,
    }
})