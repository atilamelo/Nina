import React, { useState, useContext } from 'react';
import { ScrollView, KeyboardAvoidingView, View, Platform, TouchableOpacity  } from 'react-native';
import { DreamContext } from '../../contexts/DreamContext';
import styled from 'styled-components/native';
import Background from '../../components/Background';
import voltarImage from '../../assets/icons/Voltar.png';
import MainHeader from '../../components/Headers/MainHeader';
import DreamFooter from '../../components/Footers/DreamFooter';
import BasicButton  from '../../components/Buttons/BasicButton'
import DegradeButton from '../../components/Buttons/DegradeButton'

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

    console.log(dreamData);

    return (
        
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            windowSoftInputMode="adjustResize"
        >
            <Background>
                <ScrollView>
                    <Container>

                        <MainHeader
                            left={
                                <TouchableOpacity onPress={voltarButton}>
                                    <Voltar source={voltarImage} />
                                </TouchableOpacity>
                            }
                            middle={<Texto>Escreva seu sonho</Texto>}
                        />

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
                                iconFile={require('../../assets/icons/mic.png')}
                                iconWidth={31}
                                iconHeight={29}
                            />
                        </View>
                        
                        {/* Gerar imagem com IA */}
                        <BasicButton 
                            onPress={generateImage}
                            iconFile={require('../../assets/icons/img.png')}
                            iconWidth={27}
                            iconHeight={22}
                        />
                    </View>


                    <DegradeButton 
                        onPress={nextScreen}
                        iconFile={require('../../assets/icons/arrow.png')}
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

const Voltar = styled.Image`
    width: 15px;
    resize-mode: contain;
    left: 10%;
`;

const Texto = styled.Text`
    text-align: right;
    font-size: 22px;
    color: #ffffff;
    font-weight: bold;
`;

const Titulo = styled.TextInput`
    margin-top: 10%;
    margin-left: 8%;
    margin-horizontal: 8%;
    font-size: 25px;
    color: #ffffff;
    font-weight: bold;
`;

const Sonho = styled.TextInput`
    margin-top: 9%;
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

export default WriteScreen;
