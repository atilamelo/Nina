import React from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DreamBox from '../../components/DreamBox';
import { dreamsExample } from './data'; // Sample data moved to a separate file
import MainHeader from '../../components/Headers/MainHeader';
import Background from '../../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
    return (
        <Background>
            <View style={styles.container}>
                    <MainHeader
                        middle={<Text>No Meio</Text>} // Conteúdo para a seção do meio da TopBar
                        right={<Text>Direita</Text>} // Conteúdo para a seção direita da TopBar
                    />
                    
                    <View style={styles.content}>
                        {/* List of dreams */}
                        <View style={styles.dreamsList}>
                            <FlatList
                                data={dreamsExample}
                                renderItem={({ item }) => <DreamBox item={item} />}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </View>
            </View>
        </Background>
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
    }
});

export default HomeScreen;
