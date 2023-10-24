import { NavigationContext } from '@react-navigation/native';
import { useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import DreamBox from '@components/DreamBox';

const HomeContent = ( { dreamData } ) => {
    const navigation = useContext(NavigationContext);

    return (
        <View style={styles.content}>
            <View style={styles.dreamsList}>
                <FlatList
                    data={dreamData}
                    renderItem={({ item }) => <DreamBox item={item} navigation={navigation} />}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{ paddingBottom: 90 }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
    },
    dreamsList: {
        flex: 1,
    },
});

export default HomeContent;
