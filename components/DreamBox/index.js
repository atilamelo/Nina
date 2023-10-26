import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

const formatDate = ( date ) => {  
    return format(date, 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR });
};

const DreamBox = ({ item: props, navigation }) => {
    console.log(props)
    return (
        <TouchableOpacity onPress={() => navigation.navigate('EndDreamScreen', { props: { ...props, date: props.creationDate.toISOString() } })}>
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <AdditionalInformation item={props} />
                    <DreamContent item={props} />
                    <Text style={styles.data}>{formatDate(props.creationDate)}</Text>
                </View>
            </View>

        </TouchableOpacity>
    );
};

const DreamContent = ({ item }) => {
    return (
            <View style={styles.backgroundMain}>
                <View style={styles.mainContainer}>
                    <Text style={styles.text}>{item.text}</Text>
                    {item.localImagePath ? (
                        <Image style={styles.dreamImage} source={{uri: item.localImagePath}} />
                    ) : null}                
                    </View>
            </View>
    );
};

const AdditionalInformation = ({ item }) => {
    return (
        <View style={styles.aditionalInformation}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
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
