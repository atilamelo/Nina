import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DreamBox = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <DreamContent item={item} />
                <AdditionalInformation item={item} />
            </View>
        </View>
    );
};

const DreamContent = ({ item }) => {
    return (
        <View style={styles.backgroundMain}>
            <View style={styles.mainContainer}>
                <Text style={styles.text}>{item.resumedText}</Text>
                <Image style={styles.dreamImage} source={item.imagePath} />
            </View>
        </View>
    );
};

const AdditionalInformation = ({ item }) => {
    return (
        <View style={styles.aditionalInformation}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.data}>{item.data}</Text>
        </View>
    );
};

export default DreamBox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 3,
        marginTop: 15,
    },
    cardContainer: {
        width: 320,
        flexDirection: 'column',
        alignItems: 'center',
    },
    backgroundMain: {
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#2B314C',
    },
    mainContainer: {
        width: 250,
    },
    aditionalInformation: {},
    dreamImage: {
        width: 250,
        height: 250,
        borderRadius: 5,
        marginTop: 15,
    },
    text: {
        textAlign: 'justify',
        color: '#fff',
    },
    title: {
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff',
    },
    data: {
        textAlign: 'center',
        color: '#686565',
    },
});
