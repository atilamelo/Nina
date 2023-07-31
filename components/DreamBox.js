import { View, Text, Image, StyleSheet } from 'react-native';

const DreamBox = ({ item }) => {
    const img_path = '../assets/purple_cat.jpg'
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.backgroundMain}>
                    <View style={styles.mainContainer}>
                        <Text style={styles.text}>{item.resumedText}</Text>
                        <Image style={styles.dreamImage} source={require(img_path)} />
                    </View>
                </View>
                <View style={styles.aditionalInformation}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.data}>{item.data}</Text>
                </View>
            </View>
        </View>
    )
}

export default DreamBox;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#d142f5', // Rosa
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
        // backgroundColor: '#f55a42', // Laranja
    },
    backgroundMain: {
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#2B314C',  // Ciano
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
    }
})