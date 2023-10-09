import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import Background from '@components/Background';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import DreamFooter from '@components/Footers/DreamFooter';
import { DegradeButton } from '@components/Buttons';
import DreamDetails from '@components/EndComponents/DreamDetails';
import Header from '@components/EndComponents/Header';

const EndDreamScreen = ({ route, navigation }) => {
    const dreamData = route.params.props;
    const [favorited, setFavorited] = useState(false);
    console.log(navigation)
    const toggleFavorite = () => {
        setFavorited(!favorited);
    };

    return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        windowSoftInputMode="adjustResize"
    >
        <Background>

            <Header navigation={navigation} toggleFavorite={toggleFavorite} favorited={favorited} />

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

const CenteredContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 7%;
`;
