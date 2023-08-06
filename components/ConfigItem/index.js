import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';

export const ConfigItem = ({ label, iconSource, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemLabel}>{label}</Text>
                <Image source={iconSource} style={styles.itemIcon} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        width: '87%',
        height: 54,
        backgroundColor: '#2B314C',
        borderRadius: 13,
        padding: 10,
        marginBottom: 30, // Distance between email and password
        alignSelf: 'center',
    },
        itemLabel: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 15,
        paddingTop: '2%',
        marginLeft: '5%',
        fontWeight: 'bold',
    },
    itemIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: '8%',
        alignSelf: 'flex-start',
        paddingTop: '12%',
    },
});