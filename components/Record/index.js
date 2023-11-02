import React, { useState, useEffect, useRef, useContext } from 'react';
import { Image, Alert, PermissionsAndroid, Platform, Button } from 'react-native';
import { DreamContext } from '@contexts/DreamContext';
import styled from 'styled-components/native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import * as FileSystem from 'expo-file-system';

const audioRecorderPlayer = new AudioRecorderPlayer();

const Record = ({ onRecordingComplete }) => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef();
  const dreamContext = useContext(DreamContext);
  const setDreamData = dreamContext.setDreamData;

  // Importe a imagem usando require
  const micIcon = require('@assets/icons/micPreenchido.png');

  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);
        if (
          grants['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('Permissions granted');
        } else {
          console.log('All required permissions not granted');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const startRecording = async () => {
    
    const result = await audioRecorderPlayer.startRecorder();
    setIsRecording(true);

    // Iniciar o timer quando a gravação começar
    startTimer();

  };

  const stopRecording = async () => {
    if (!isRecording) {
      // Se não estiver gravando, ignore a parada da gravação
      return;
    }
    const result = await audioRecorderPlayer.stopRecorder();
    setIsRecording(false);

    // Parar o timer quando a gravação terminar
    stopTimer();

    onRecordingComplete();
    
    const newPath = FileSystem.documentDirectory + dreamContext.dreamData.id + "_audio.mp4";
    
    try {
      await FileSystem.copyAsync({
        from: result, // Path
        to: newPath
      })
    }catch (err) {
      console.error(err);
    };

    setDreamData((prevData) => ({
      ...prevData,
      audioPath: newPath,
    }));

    console.log(newPath);
  }

  const startTimer = () => {
    // Certifique-se de que o timer não esteja sendo executado antes de iniciar
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    // Pare o timer se estiver em execução
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimer(0);
    }
  };

  // Renderização do componente Record
  return (
    <>
      <LowerRectangleContainer>
        <Content>
          <Descricao>Descreva seu sonho</Descricao>
        </Content>

        <PressableEllipse
          isRecording={isRecording}
          onPressIn={startRecording}
          onPressOut={stopRecording}
        >
          <Image
            source={isRecording ? require('@assets/icons/rec.png') : micIcon}
            style={{ width: isRecording ? 25 : 21, height: isRecording ? 25 : 30 }}
          />
        </PressableEllipse>
        {isRecording ? (
          <Tempo>{`${String(Math.floor(timer / 60)).padStart(2, '0')}:${String(timer % 60).padStart(2, '0')}`}</Tempo>
        ) : (
          <Texto>Aperte ou segure o Microfone para falar</Texto>
        )}
      </LowerRectangleContainer>
    </>
  );
};

const PressableEllipse = styled.Pressable`
  width: 60px;
  height: 60px;
  background-color: ${({ isRecording }) => (isRecording ? '#BD2E32' : '#9F238E')};
  border-radius: 30px;
  align-self: center;
  margin-top: 65px;
  justify-content: center;
  align-items: center;
  margin-bottom: 22px;
`;

const LowerRectangleContainer = styled.View`
  width: 100%;
  height: 215px;
  background: #2B314C;
  position: absolute;
  bottom: 0;
`;

const Texto = styled.Text`
  color: #d9d9d9;
  text-align: center;
  font-family: 'Inter Regular';
  font-size: 13px;
`;

const Tempo = styled.Text`
  color: #fff;
  text-align: center;
  font-family: 'Inter Regular';
  font-size: 20px;
`;

const Descricao = styled.Text`
  color: #D9D9D9;
  font-family: "Inter Regular";
  font-size: 17px;
`;

const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: -10%;
  margin-top: 5%;
`;

export default Record;
