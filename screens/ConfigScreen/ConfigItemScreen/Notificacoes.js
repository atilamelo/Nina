import React, { useState, useContext } from 'react';
import { ScrollView, KeyboardAvoidingView, View, Platform, TouchableOpacity  } from 'react-native';
import styled from 'styled-components/native';
import Background from '../../../components/Background';
import BackHeader from '../../../components/Headers/BackHeader';
import { DreamContext } from '../../../contexts/DreamContext';
import ConfigItem from '../../../components/ConfigComponets/ConfigItem';

const Notificacoes = ( { navigation } ) => {
    const dreamContext = useContext(DreamContext);
    const dreamData = dreamContext.dreamData;

    // Dream Data log to debug purposes
    console.log(JSON.stringify(dreamData));

    return (
        
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            windowSoftInputMode="adjustResize"
        >
            <Background>
                
                <BackHeader onPress={() => {navigation.goBack()}} title={'Notificações'}/>

                <ScrollView>
                    <Container>

                        <ConfigItem label="Notificação da manhã" onPress={() => { }} />

                    </Container>
                </ScrollView>
                
            </Background>
        </KeyboardAvoidingView>
    );
}

const Container = styled.View`
    flex: 1;
`;

const Titulo = styled.TextInput`
    margin-vertical: 5%;
    margin-horizontal: 8%;
    font-size: 25px;
    color: #ffffff;
    font-weight: bold;
`;

const Sonho = styled.TextInput`
    margin-left: 8%;
    margin-horizontal: 8%;
    font-size: 17px;
    color: #ffffff;
   
`;

const styles = {
    container: {
        flex: 1,
    },
};

export default Notificacoes;
