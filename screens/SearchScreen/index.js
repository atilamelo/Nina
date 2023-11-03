import React, { useEffect, useState } from 'react';
import { FlatList, KeyboardAvoidingView } from 'react-native';
import { useRealm } from '@databases/realm';
import { useFocusEffect } from '@react-navigation/native';
import { DreamSchema } from '@databases/schemas';
import DreamBox from '@components/DreamBox';
import Background from '@components/Background';
import SearchHeader from '@components/Headers/SearchHeader';

export default SearchScreen = ( { route, navigation } ) => {
    const realm = useRealm();
    const [searchText, setSearchText] = useState(null);
    const [dreamsData, setdreamsData] = useState(null);
    const [matchData, setMatchData] = useState(null);

    useFocusEffect(
        React.useCallback(() => {
            console.log("Focused")
            setdreamsData(realm.objects(DreamSchema))
        }, [])
    );
    
    useEffect(() => {
        if(searchText && dreamsData){
            const filteredDreams = dreamsData.filtered(
                `title CONTAINS[c] "${searchText}" OR text CONTAINS[c] "${searchText}"`
            );
            
            setMatchData(filteredDreams)
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
                    placeholder="Pesquisar pelo título"
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

