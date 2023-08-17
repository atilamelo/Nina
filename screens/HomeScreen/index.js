import React from 'react';
import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DreamBox from '../../components/DreamBox';
import { dreamsExample } from './data'; // Sample data moved to a separate file
import MainHeader from '../../components/Headers/MainHeader';
import Background from '../../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import BackHeader from '../../components/Headers/BackHeader';

const BackImage = styled.Image`
    width: 16px;
    height: 27px;
`;

const BackButton = styled.TouchableOpacity`

    background-color: 'red';
`


const HomeScreen = ({ navigation }) => {
    return (
        <Background>
            <View style={styles.container}>

                    {/* Necessário ainda programar Header */}
                    <MainHeader/>
                    
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
