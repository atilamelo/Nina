import React, { useContext } from 'react';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Google from '@assets/Config/Google.png';
import { AuthContext } from '@contexts/AuthContext';
import * as FileSystem from 'expo-file-system';

export default () => {
    const { updateUser } = useContext(AuthContext);

    const saveImageLocally = async (imagePath, nameFile) => {
        const fileUri = FileSystem.documentDirectory + nameFile + '_profileImage.png';
        
        // If file exists, overwrite it
        await FileSystem.deleteAsync(fileUri, { idempotent: true }); 

        try {
            const result = await FileSystem.downloadAsync(imagePath, fileUri);
            return result.uri;
        } catch (error) {
            console.log(error)
            throw new Error(`Error saving image: ${error}`);
        }
    };

    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
        // webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
    });

    const handlegoogleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const localPathPhoto = await saveImageLocally(userInfo.user.photo, userInfo.user.id.toString());
            updateUser(JSON.stringify({...userInfo.user, photo: localPathPhoto}));
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outd  ated
            } else {
                // some other error happened
            }
            console.log(error);
        }
    }

    return (
        <TouchableOpacity onPress={handlegoogleLogin}>
            <GoogleLogin>
                <GoogleIcon source={Google} />
                <Texto>Entrar com o Google</Texto>
            </GoogleLogin>
        </TouchableOpacity>
    )
}

const GoogleLogin = styled.View`
  width: 330px;
  height: 54px;
  margin: auto;
  background-color: #ececec;
  border-radius: 13px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3%;
`;

const GoogleIcon = styled.Image`
  resize-mode: contain;
  width: 25px;
  height: 25px;
  margin-left: 18px;
  border-radius: 13px;
`;

const Texto = styled.Text`
  font-family: "Inter Regular";
  text-align: center;
  font-size: 16px;
  margin-left: 23px;
  color: #000;
`;