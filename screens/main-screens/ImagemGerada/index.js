import React, {useState} from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity, Image  } from 'react-native';
import styled from 'styled-components/native';
import Background from '../../../components/Background/Background';
import TopBar from '../../../components/TopBar';
import voltarImage from '../../../assets/icons/Voltar.png';
import purpleCatImage from '../../../assets/purple_cat.jpg';
import arrow from '../../../assets/icons/arrow.png';
import DegradeButton from '../../../components/DegradeButton';
import reload from '../../../assets/icons/reload.png';
import BottomBar from '../../../components/BottomBar';



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
                
                <TopBar
                    left={
                        <TouchableOpacity onPress={voltarButton}>
                            <Voltar source={voltarImage} />
                        </TouchableOpacity>
                    }
                    middle={<Texto>Imagem Gerada</Texto>}
                />
                <Container>
                    <Content>
                        <Imagem source={purpleCatImage} resizeMode="contain" borderRadius={13}/>

                        <BottomBar style = {{justifyContent: "space-between"}}>
                            
                            <DegradeButton
                                iconFile={reload}
                                iconWidth={22}
                                iconHeight={22}
                            />

                            <DegradeButton
                                iconFile={arrow}
                                iconWidth={22}
                                iconHeight={22}
                            />

                        </BottomBar>
                    </Content>

                </Container>
            </Background>
        </KeyboardAvoidingView>
    );
}

const Container = styled.View`
    flex: 1;
    padding: 20px; 
`;

const Content = styled.View`
    flex: 1;
    align-items: center;
    
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

const styles = {
    container: {
        flex: 1,
    },
};

export default WriteScreen;
