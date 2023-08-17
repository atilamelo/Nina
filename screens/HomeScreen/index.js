import React from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import DreamBox from '../../components/DreamBox';
import { dreamsExample } from './data'; // Sample data moved to a separate file
import MainHeader from '../../components/Headers/MainHeader';
import Background from '../../components/Background';

// Images
import menuIco from '../../assets/icons/menu.png'; 
import searchIco from '../../assets/icons/search.png';
import optionsIco from '../../assets/icons/options.png';

const HomeScreen = ({ navigation }) => {
    return (
        <Background>
            <View style={styles.container}>

                    <MainHeader
                        left={
                            <TouchableOpacity>
                                <Image 
                                    source={menuIco}
                                    style={{ width: 24, height: 20, resizeMode: 'contain' }}
                                />
                            </TouchableOpacity>
                        }
                        right={
                            <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
                                <TouchableOpacity>
                                    <Image 
                                        source={searchIco}
                                        style={{ width: 24, height: 24, marginHorizontal: 12 }}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Image 
                                        source={optionsIco}
                                        style={{ width: 5, height: 19, marginHorizontal: 12 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        }
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
