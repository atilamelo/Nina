import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

const formatDate = (date) => {
    return format(date, 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR });
};

const AdditionalInformation = ({ item }) => (
    <View style={styles.aditionalInformation}>
        <Text style={styles.title}>{item.title}</Text>
    </View>
);

const DreamContent = ({ item }) => (
    <View style={styles.backgroundMain}>
        <View style={styles.mainContainer}>
            <Text numberOfLines={3} style={styles.text}>{item.text}</Text>
            {item.localImagePath && (
                <Image style={styles.dreamImage} source={{ uri: item.localImagePath }} />
            )}
        </View>
    </View>
);

const DreamBox = ({ item, navigation }) => {
    const { creationDate, modificationDate, ...otherProps } = item;
    return (
        <TouchableOpacity onPress={() => navigation.navigate('EndDreamScreen', { props: { ...otherProps, creationDate: creationDate.toISOString(), modificationDate: modificationDate.toISOString() } })}>
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <AdditionalInformation item={item} />
                    <DreamContent item={item} />
                    <Text style={styles.data}>{formatDate(creationDate)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default DreamBox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    cardContainer: {
        width: 320,
        flexDirection: 'column',
        alignItems: 'center',
    },
    backgroundMain: {
        borderRadius: 10,
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#2B314C',
    },
    mainContainer: {
        width: 250,
    },
    aditionalInformation: {
        
    },
    dreamImage: {
        width: 250,
        height: 250,
        borderRadius: 5,
        marginTop: 15,
    },
    text: {
        textAlign: 'justify',
        color: '#fff',
        fontFamily: 'Inter Regular',
        lineHeight: 20,
        overflow: 'hidden',
        position: 'relative',
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Inter Bold',
        fontSize: 15,
        color: '#fff',
    },
    data: {
        textAlign: 'center',
        color: '#686565',
        fontFamily: 'Inter Regular',
    },
});
