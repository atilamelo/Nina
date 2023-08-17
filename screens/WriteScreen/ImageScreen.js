import React, {useState} from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity, Image  } from 'react-native';
import styled from 'styled-components/native';
import Background from '../../components/Background';
import DegradeButton from '../../components/Buttons/DegradeButton';
import MainHeader from '../../components/Headers/MainHeader';
import DreamFooter from '../../components/Footers/DreamFooter';
import * as FileSystem from 'expo-file-system';
import BackHeader from '../../components/Headers/BackHeader';

/* Images */
import voltarImage from '../../assets/icons/Voltar.png';
import purpleCatImage from '../../assets/purple_cat.jpg';
import arrow from '../../assets/icons/arrow.png';
import reload from '../../assets/icons/reload.png';


const apiUrl = 'http://6783-200-131-182-32.ngrok-free.app'

const GenerateImage = ({ navigation }) => {

    const voltarButton = () => {
        navigation.navigate('Sonhos');
    };
    
    const modelo = {titulo:'', texto: ''}

    const [titulo, setTitulo] = useState(modelo);
    const [texto, setTexto] = useState(modelo);
    const [imagePath, setImagePath] = useState(require('../../assets/purple_cat.jpg'));
    
    //Evento
    const evento = (e) => {
        let titulo = e.target.text;
        let texto = e.target.text;
        let valor = e.target.value; //Não sei se eu tenho q criar outro valor para cada variavel
        
        setTitulo({...titulo, [titulo]: valor});
        setTexto({...texto, [texto]: valor});
    }

    const fr = new FileReader();
    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl + '/generate_image', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: 'Prompt test' }),
            });
        
            const blob = await response.blob();
            const imagePath = `${FileSystem.documentDirectory}` + `generated_image.jpg`; // Use FileSystem.documentDirectory
            
            fr.onload = async () => {
                await FileSystem.writeAsStringAsync(
                    imagePath, 
                    fr.result.split(',')[1], 
                    {encoding: FileSystem.EncodingType.Base64,}
                );
                // Sharing.shareAsync(imagePath);
            };
            fr.readAsDataURL(blob);

            setImagePath({uri: imagePath});

        } catch (error) {
          console.error('Error fetching or saving image:', error);
        }
      };
    
    const generateImage = () => {
        fetchData();
    }

    return (
        
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            windowSoftInputMode="adjustResize"
        >
            <Background>
                
                <BackHeader onPress={() => {navigation.goBack()}} title={'Gerar imagem'}/>

                <Container>
                    <Content>
                        <Imagem source={imagePath} resizeMode="contain" borderRadius={13}/>

                        <DreamFooter style = {{justifyContent: "space-between"}}>
                            
                            <DegradeButton
                                onPress={generateImage}
                                iconFile={reload}
                                iconWidth={22}
                                iconHeight={22}
                            />

                            <DegradeButton
                                iconFile={arrow}
                                iconWidth={22}
                                iconHeight={22}
                            />

                        </DreamFooter>
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

export default GenerateImage;
