import React, { useState, useContext } from 'react';
import { ScrollView, KeyboardAvoidingView, View, Platform, TouchableOpacity  } from 'react-native';
import styled from 'styled-components/native';
import Background from '../../../components/Background';
import BackHeader from '../../../components/Headers/BackHeader';
import SettingsItem from '../../../components/ConfigComponets/SettingsItem';

const FaleConosco = ( { navigation } ) => {

    return (
        
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            windowSoftInputMode="adjustResize"
        >
            <Background>
                
                <BackHeader onPress={() => {navigation.goBack()}} title={'Fale conosco'}/>

                <ScrollView>
                    <Container>

                        <Contatos>carlachicareli@gmail.com</Contatos>
                        <Contatos>carolina@emof.com.br</Contatos>
                        <Contatos>atilamelodesouza@gmail.com</Contatos>
                        
                    </Container>
                </ScrollView>
                
            </Background>
        </KeyboardAvoidingView>
    );
}

const Container = styled.View`
    flex: 1;
    flex-direction: column;
`;

const Contatos = styled.Text`
    font-size: 16px;
    color: #fff;
    margin-left: 10%;
    margin-top: 4%;
    font-family: 'Inter Regular';
`;

const styles = {
    container: {
        flex: 1,
    },
};

export default FaleConosco;
