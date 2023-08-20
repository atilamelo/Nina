import React, { useState, useContext } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform  } from 'react-native';
import styled from 'styled-components/native';
import Background from '../../../components/Background';
import BackHeader from '../../../components/Headers/BackHeader';
import SettingsItem from '../../../components/ConfigComponets/SettingsItem';

const Notificacoes = ( { navigation } ) => {

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

                        <SettingsItem label="Notificação da manhã" description= "Lembre-se de escrever seus sonhos" onPress={() => { }} showSwitch={true} />
                        <SettingsItem label="Notificação da noite" description= "Lembre-se de revisar seus sonhos" onPress={() => { }} showSwitch={true} />
                        <SettingsItem label="Silenciar notificações " description= "Defina um intervalo sem notificações" onPress={() => { }} showSwitch={false} />

                    </Container>
                </ScrollView>
                
            </Background>
        </KeyboardAvoidingView>
    );
}

const Container = styled.View`
    flex: 1;
`;

const styles = {
    container: {
        flex: 1,
    },
};

export default Notificacoes;
