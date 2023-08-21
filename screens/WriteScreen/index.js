import React, { useState, useContext } from 'react';
import { ScrollView, KeyboardAvoidingView, View, Platform, TouchableOpacity  } from 'react-native';
import { DreamContext } from '@contexts/DreamContext';
import { BasicButton, DegradeButton } from '@components/Buttons';
import { DreamFooter } from '@components/Footers/DreamFooter';
import { BackHeader } from '@components/Headers/BackHeader';
import { Background } from '@components/Background';
import styled from 'styled-components/native';

const WriteScreen = ( { navigation } ) => {
    const dreamContext = useContext(DreamContext);
    const dreamData = dreamContext.dreamData;
    const setDreamData = dreamContext.setDreamData;
  
    const voltarButton = () => {
        navigation.navigate('Sonhos');
    };

    const nextScreen = () => {
        navigation.navigate('DreamRec');
    };

    const generateImage = () => {
        navigation.navigate('DreamImage');
    };

    const onChangeTitle = ( title ) => {
        setDreamData(prevData => ({
            ...prevData,
            title: title
        }))
    };

    const onChangeText = ( text ) => {
        setDreamData(prevData => ({
            ...prevData,
            text: text
        }))
    };

    return (
        
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            windowSoftInputMode="adjustResize"
        >
            <Background>
                
                <BackHeader onPress={() => {navigation.goBack()}} title={'Escreva seu sonho'}/>

                <ScrollView>
                    <Container>
                        <Titulo 
                            placeholder="Título"
                            placeholderTextColor="#B4B4B4"
                            type = "text" 
                            name = "titulo"
                            multiline={true} // Habilita várias linhas
                            onChangeText={onChangeTitle}
                            selectionColor="purple"
                            maxLength={50}
                            value={dreamData.title}
                        />

                        <>{Titulo.titulo}</>

                        <Sonho 
                            placeholder="Escreva aqui seu sonho."
                            placeholderTextColor="#B4B4B4"
                            type="text" 
                            name="texto"
                            multiline={true}
                            onChangeText={onChangeText}
                            selectionColor="purple"
                            value={dreamData.text}
                        />

                    </Container>
                </ScrollView>
                <DreamFooter style={{justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 27}}>
                            {/* Gravar com o áudio */}
                            <BasicButton 
                                onPress={() => undefined}
                                iconFile={require('@assets/icons/mic.png')}
                                iconWidth={31}
                                iconHeight={29}
                            />
                        </View>
                        
                        {/* Gerar imagem com IA */}
                        <BasicButton 
                            onPress={generateImage}
                            iconFile={require('@assets/icons/img.png')}
                            iconWidth={27}
                            iconHeight={22}
                        />
                    </View>


                    <DegradeButton 
                        onPress={nextScreen}
                        iconFile={require('@assets/icons/arrow.png')}
                        iconWidth={22}
                        iconHeight={22}
                    />                
                </DreamFooter>
                
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
    font-family: 'Inter Bold';
`;

const Sonho = styled.TextInput`
    margin-left: 8%;
    margin-horizontal: 8%;
    font-size: 17px;
    color: #ffffff;
    font-family: 'Inter Regular';
`;

const styles = {
    container: {
        flex: 1,
    },
};

export default WriteScreen;
