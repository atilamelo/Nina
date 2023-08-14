import React, {useState} from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity, Image  } from 'react-native';
import styled from 'styled-components/native';
import Background from '../../../components/Background/Background';
import TopBar from '../../../components/TopBar';
import voltarImage from '../../../assets/icons/Voltar.png';
import purpleCatImage from '../../../assets/purple_cat.jpg';
import arrow from '../../../assets/icons/arrow.png';



const WriteScreen = ({ navigation }) => {

    const voltarButton = () => {
        navigation.navigate('Sonhos');
    };

    //Modelo JSON
    const modelo = {titulo:'', texto: ''}

    //useState
    const [titulo, setTitulo] = useState(modelo);
    const [texto, setTexto] = useState(modelo);

    //Evento
    const evento = (e) => {
        let titulo = e.target.text;
        let texto = e.target.text;
        let valor = e.target.value; //Não sei se eu tenho q criar outro valor para cada variavel
        
        setTitulo({...titulo, [titulo]: valor});
        setTexto({...texto, [texto]: valor});
    }

    return (
        
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            windowSoftInputMode="adjustResize"
        >
            <Background>
                <Container>
                            <TopBar
                                left={
                                    <TouchableOpacity onPress={voltarButton}>
                                        <Voltar source={voltarImage} />
                                    </TouchableOpacity>
                                }
                                middle={<Texto>Imagem Gerada</Texto>}
                            />

                            <Imagem source={purpleCatImage} resizeMode="contain"/>

                            <BottomBarContainer source={arrow}/>

                </Container>
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

const Imagem = styled.Image`
    width: 283px;
    height: 289px;
    align-self: center;
    margin-top: 40%;
`;

const BottomBarContainer = styled.View`
    flex: 1;
    flex-direction: row;
    position: absolute;
    width: 100%;
    bottom: 6.5%;
    padding-right: 25px;
    padding-left: 25px;
    justify-content: space-between;
    align-self: flex-end;
    background-color: red;
`;

const styles = {
    container: {
        flex: 1,
    },
};

export default WriteScreen;
