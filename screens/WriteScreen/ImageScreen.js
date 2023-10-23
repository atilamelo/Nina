import React, { useState, useContext, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, Image, BackHandler } from 'react-native';
import { DegradeButton } from '@components/Buttons';
import { DreamContext } from '@contexts/DreamContext';
import DreamFooter from '@components/Footers/DreamFooter';
import Background from '@components/Background';
import BackHeader from '@components/Headers/BackHeader';
import * as FileSystem from 'expo-file-system';
import styled from 'styled-components/native';
import AlertModal from '@components/Modals/AlertModal';

/* Images */
import arrow from '@assets/icons/arrow.png';
import reload from '@assets/icons/reload.png';

const apiUrl = 'https://5e31-200-17-154-233.ngrok-free.app'

const GenerateImage = ({ navigation }) => {
    const dreamContext = useContext(DreamContext);
    const dreamData = dreamContext.dreamData;
    const [isLoading, setIsLoading] = useState(dreamData.localImagePath === undefined);
    const [isExitModalVisible, setIsExitModalVisible] = useState(false);

    const fr = new FileReader();

    // Função para lidar com o botão de voltar
    const handleBackPress = () => {
        setIsExitModalVisible(true);
        return true; // Impede o comportamento padrão de fechar a tela
    };

    // Adiciona o ouvinte para o botão de voltar
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

        // Remove o ouvinte quando o componente é desmontado
        return () => backHandler.remove();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl + '/generate_image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: dreamData.text }),
            });

            const data = await response.json();
            const link_generated_img = data.link_generated_img;

            dreamData.imagePath = link_generated_img;

            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching or saving image:', error);
        }
    };

    const saveImageLocally = async () => {
        const fileUri = FileSystem.documentDirectory + dreamData.id + '_image.png';

        try {
            const { uri } = await FileSystem.downloadAsync(
                dreamData.imagePath,
                fileUri
            );

            dreamData.localImagePath = uri;
            console.log('Image saved to:', uri);
        } catch (error) {
            console.error('Error saving image:', error);
        }
    };

    const generateImage = () => {
        fetchData();
    }

    const nextStep = () => {
        navigation.navigate('DreamRec');
        saveImageLocally();
    }

    const confirmExit = () => {
        setIsExitModalVisible(false);
        navigation.goBack();
    };

    const cancelExit = () => {
        setIsExitModalVisible(false);
    };

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            windowSoftInputMode="adjustResize"
        >
            <Background>

            <BackHeader onPress={() => setIsExitModalVisible(true)} title={'Gerar imagem'} />

                <Container>
                    <Content>
                        {isLoading ? (
                            <LoadingContainer>
                                <Image source={require('@assets/icons/loading.gif')} style={{ width: 70, height: 70 }} />
                            </LoadingContainer>
                        ) : (
                            <Imagem source={{ uri: dreamData.imagePath }} resizeMode="contain" borderRadius={13} />
                        )}
                        <DreamFooter style={{ justifyContent: "space-between" }}>

                            <DegradeButton
                                onPress={generateImage}
                                iconFile={reload}
                                iconWidth={22}
                                iconHeight={22}
                            />

                            <DegradeButton
                                onPress={nextStep}
                                iconFile={arrow}
                                iconWidth={22}
                                iconHeight={22}
                            />

                        </DreamFooter>
                    </Content>

                </Container>

                <AlertModal
                    visible={isExitModalVisible}
                    content="Se você sair a imagem será descartada"
                    button1Text='SAIR'
                    button2Text='CANCELAR'
                    onRequestButton1={confirmExit}
                    onRequestButton2={cancelExit}
                    button1Color="#BD2E32"
                    onClose={cancelExit}
                />
                
            </Background>
        </KeyboardAvoidingView>
    );
}

const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 65%;
`;

const Container = styled.View`
    flex: 1;
    padding: 20px; 
`;

const Content = styled.View`
    flex: 1;
    align-items: center;
    
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
