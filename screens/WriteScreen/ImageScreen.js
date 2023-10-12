import React, { useState, useContext } from 'react';
import { KeyboardAvoidingView, Platform, Image } from 'react-native';
import { DegradeButton } from '@components/Buttons';
import { DreamContext } from '@contexts/DreamContext';
import DreamFooter from '@components/Footers/DreamFooter';
import Background from '@components/Background';
import BackHeader from '@components/Headers/BackHeader';
import * as FileSystem from 'expo-file-system';
import styled from 'styled-components/native';

/* Images */
import arrow from '@assets/icons/arrow.png';
import reload from '@assets/icons/reload.png';

const apiUrl = 'http://eedc-2804-d45-995a-3300-85ea-1788-e0b-f86f.ngrok-free.app'

const GenerateImage = ({ navigation }) => {
    const dreamContext = useContext(DreamContext);
    const dreamData = dreamContext.dreamData;
    const [isLoading, setIsLoading] = useState(true);
    console.log(dreamData)

    const fr = new FileReader();
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

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            windowSoftInputMode="adjustResize"
        >
            <Background>

                <BackHeader onPress={() => { navigation.goBack() }} title={'Gerar imagem'} />

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
