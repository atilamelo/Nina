import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity, Modal, Text } from 'react-native';
import { DreamSchema } from '@databases/schemas/DreamSchema';
import { useQuery } from '@databases/realm';
import DreamBox from '@components/DreamBox';
import Background from '@components/Background';
import MainHeader from '@components/Headers/MainHeader';
import OptionsModal from '@components/Modals/OptionsModal';

// Images
import menuIco from '@assets/icons/menu.png'; 
import searchIco from '@assets/icons/search.png';
import optionsIco from 'assets/icons/options.png';

const getSortedDreams = () => {
    console.log(useQuery(DreamSchema).sorted('date', true));
    return useQuery(DreamSchema).sorted('date', true)
}

const HomeScreen = ({ navigation }) => {
    const [isOptionsVisible, setOptionsVisible] = useState(false);

    const toggleOptionsModal = () => {
        setOptionsVisible(!isOptionsVisible);
    }

    return (
        <Background>
            <View style={styles.container}>

                    <MainHeader
                        left={
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
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

                                <TouchableOpacity onPress={toggleOptionsModal}>
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
                                data={getSortedDreams()}
                                renderItem={({ item }) => <DreamBox item={item} navigation={navigation} />}
                                keyExtractor={(item, index) => index.toString()}
                                contentContainerStyle={{ paddingBottom: 90 }}
                            />
                        </View>
                    </View>
            </View>

            <OptionsModal isVisible={isOptionsVisible} onClose={toggleOptionsModal} />
            
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
    },
});

export default HomeScreen;
