import React from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';
import DreamBox from '../../../components/DreamBox';
import { dreamsExample } from './data'; // Sample data moved to a separate file
import TopBar from '../../../components/TopBar';
import Background from '../../../components/Background/Background';

const HomeScreen = ({ navigation }) => {
    return (
    <Background>
        <View style={styles.container}>
            
                <TopBar
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
        paddingTop: 40,
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
