import React, { useState, useContext } from 'react';
import { ScrollView, KeyboardAvoidingView, View, Platform, TouchableOpacity  } from 'react-native';
import styled from 'styled-components/native';
import Background from '../../../components/Background';
import BackHeader from '../../../components/Headers/BackHeader';
import SettingsItem from '../../../components/ConfigComponets/SettingsItem';

const Backup = ( { navigation } ) => {

    return (
        
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            windowSoftInputMode="adjustResize"
        >
            <Background>
                
                <BackHeader onPress={() => {navigation.goBack()}} title={'Backup em nuvem'}/>

                <ScrollView>
                    <Container>

                        <SettingsItem label="Última sincronização" description= "Uma semana atrás" onPress={() => { }} showSwitch={false} />
                        <SettingsItem label="Frequência de backup" description= "A cada uma semana" onPress={() => { }} showSwitch={false} />
                        <SettingsItem label="Sincronizar com dados móveis " description= "Fazer backup usando dados móveis" onPress={() => { }} showSwitch={true} />

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

export default Backup;
