import React, { useEffect, useState } from 'react';
import { FlatList, KeyboardAvoidingView } from 'react-native';
import { useRealm } from '@databases/realm';
import { useFocusEffect } from '@react-navigation/native';
import { DreamSchema } from '@databases/schemas';
import DreamBox from '@components/DreamBox';
import Background from '@components/Background';
import SearchHeader from '@components/Headers/SearchHeader';

export default SearchScreen = ( { route, navigation, placeholder } ) => {
    const dreamsData = route.params.props.dreamData;
    const [searchText, setSearchText] = useState(null);
    const [matchData, setMatchData] = useState(null);
    
    useEffect(() => {
        if(searchText && dreamsData){
            const filteredDreams = dreamsData.filter((dream) => {
                return dream.title.toLowerCase().includes(searchText.toLowerCase()) || dream.text.toLowerCase().includes(searchText.toLowerCase());
            });
            
            // Log the filtered dreams in a prettier JSON format
            console.log(JSON.stringify(filteredDreams, null, 2));
            setMatchData(filteredDreams);
        }else{
            setMatchData(null)
        }
    }, [searchText, dreamsData])

    const onChangeText = (text) => {
        console.log("Search Text:", text);
        setSearchText(text);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            windowSoftInputMode="adjustResize"
        >
            <Background>
            
                <SearchHeader
                    placeholder= {placeholder ? placeholder : "Pesquisar nos seus sonhos"}
                    onChangeText={onChangeText}
                />

            <FlatList
                data={matchData}
                renderItem={({ item }) => <DreamBox item={item} navigation={navigation} />}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: 90 }}
            />


            </Background>
        </KeyboardAvoidingView>
    );
}

