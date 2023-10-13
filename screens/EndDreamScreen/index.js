import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import Background from '@components/Background';
import { ScrollView } from 'react-native-gesture-handler';
import { useRealm, useQuery } from '@databases/realm'
import { DegradeButton } from '@components/Buttons';
import { DreamSchema } from '@databases/schemas/DreamSchema';
import styled from 'styled-components/native';
import DreamFooter from '@components/Footers/DreamFooter';
import DreamDetails from '@components/EndComponents/DreamDetails';
import Header from '@components/EndComponents/Header';

const EndDreamScreen = ({ route, navigation }) => {
    const dreamData = useQuery(DreamSchema).filtered(`_id = "${route.params.props._id}"`)[0];
    const [favorited, setFavorited] = useState(dreamData.favorite);
    const realm = useRealm();

    const toggleFavorite = () => {
        try{
            realm.write(() => {
            const dream = realm.objectForPrimaryKey(DreamSchema, dreamData._id);
            dream.favorite = !favorited;
            });
        } catch(e){
            console.log(e);
        }
        
        setFavorited(!favorited);
    };

    const toggleDelete = () => {
        try{
            realm.write(() => {
                const dream = realm.objectForPrimaryKey(DreamSchema, dreamData._id);
                dream.deleted = true;
                });
            
            navigation.goBack();
        } catch(e){
            console.log(e);
        }
    }

    return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        windowSoftInputMode="adjustResize"
    >
        <Background>

            <Header navigation={navigation} toggleFavorite={toggleFavorite} toggleDelete={toggleDelete} favorited={favorited} />

            <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>

                <DreamDetails dreamData={dreamData} />

            </ScrollView>

            <DreamFooter style={{ justifyContent: 'flex-end' }}>

                <DegradeButton
                onPress={() => navigation.navigate('WriteScreen')}
                iconFile={require('@assets/icons/pen.png')}
                iconWidth={27}
                iconHeight={27}
                />

            </DreamFooter>

        </Background>
    </KeyboardAvoidingView>
    );
};

export default EndDreamScreen;