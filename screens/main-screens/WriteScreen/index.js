import React from 'react';
import { ScrollView, KeyboardAvoidingView, TextInput, Platform } from 'react-native';
import styled from 'styled-components/native';
import Background from '../../../components/Background/Background';
import TopBar from '../../../components/TopBar';
import voltarImage from '../../../assets/icons/Voltar.png';

const WriteScreen = ({ navigation }) => {
    return (
        <Background>
            <Container>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}
                    windowSoftInputMode="adjustResize"
                >
                            <TopBar
                                left={<Voltar source={voltarImage} />}
                                middle={<Texto>Escreva seu sonho</Texto>}
                            />
                            <TextInputStyled placeholder="Digite seu sonho aqui" />
                        
                </KeyboardAvoidingView>
            </Container>
        </Background>
    );
}

const Container = styled.View`
    flex: 1;
`;

// const Content = styled.View`
//     flex-grow: 1;
//     padding-top: 10%;
// `;

const Voltar = styled.Image`
    width: 15px;
    resize-mode: contain;
    left: 10%;
`;

const Texto = styled.Text`
    text-align: right;
    font-size: 22px;
    color: #D9D9D9;
    font-weight: bold;
`;

const TextInputStyled = styled.TextInput`
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
`;

const styles = {
    container: {
        flex: 1,
    },
};

export default WriteScreen;
