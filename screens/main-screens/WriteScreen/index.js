import React, {useState} from 'react';
import { ScrollView, KeyboardAvoidingView, TextInput, Platform } from 'react-native';
import styled from 'styled-components/native';
import Background from '../../../components/Background/Background';
import TopBar from '../../../components/TopBar';
import voltarImage from '../../../assets/icons/Voltar.png';

const WriteScreen = ({ navigation }) => {

    //Modelo JSON
    const modelo = {titulo:''}

    //useState
    const [sonho, setSonho] = useState(modelo);

    //Evento
    const evento = (e) => {
        let titulo = e.target.name;
        let valor = e.target.value;
        
        setSonho({...sonho, [titulo]: valor});
    }
    return (
        
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            windowSoftInputMode="adjustResize"
        >
            <Background>
                <ScrollView
                >
                    <Container>
                                <TopBar
                                    left={<Voltar source={voltarImage} />}
                                    middle={<Texto>Escreva seu sonho</Texto>}
                                />
                                <Titulo 
                                    placeholder="Título"
                                    placeholderTextColor="#FFFFFF"
                                    type = "text" 
                                    name = "titulo"
                                    multiline={true} // Habilita várias linhas
                                    onChange={evento}
                                />
                                <>{sonho.titulo}</>

                                <Sonho 
                                    placeholder="Escreva aqui seu sonho."
                                    placeholderTextColor="#FFFFFF"
                                    type="text" 
                                    name="titulo"
                                    multiline={true}
                                    onChange={evento}
                                />
                    </Container>
                </ScrollView>
            </Background>
        </KeyboardAvoidingView>
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
    color: #ffffff;
    font-weight: bold;
`;

const Titulo = styled.TextInput`
    margin-top: 10%;
    margin-left: 8%;
    margin-horizontal: 6%;
    font-size: 25px;
    color: #ffffff;
    font-weight: bold;
`;

const Sonho = styled.TextInput`
    margin-top: 9%;
    margin-left: 8%;
    margin-horizontal: 6%;
    font-size: 17px;
    color: #ffffff;
    caret-color: #ff0000; 
`;

const styles = {
    container: {
        flex: 1,
    },
};

export default WriteScreen;
