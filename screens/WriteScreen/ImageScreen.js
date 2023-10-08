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

const apiUrl = 'http://e3ab-2804-d45-995a-3300-94a0-9364-9c3a-6a0.ngrok-free.app'

const GenerateImage = ({ navigation }) => {
    const dreamContext = useContext(DreamContext);
    const dreamData = dreamContext.dreamData;


    const [imagePath, setImagePath] = useState(require('@assets/purple_cat.jpg'));
    const [isLoading, setIsLoading] = useState(true);

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

            setImagePath({uri: link_generated_img});
            setIsLoading(false);
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
                        {isLoading ? (
                            <Image source={require('@assets/icons/loading.gif')}/>
                        ) : (
                            <Imagem source={imagePath} resizeMode="contain" borderRadius={13}/>
                        )}
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
