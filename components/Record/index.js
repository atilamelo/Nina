import React, { useState, useEffect, useRef } from 'react';
import { Pressable, Image, Alert, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av';

const Record = () => {
  const [recording, setRecording] = useState();
  const [recordingFileURI, setRecordingFileURI] = useState();
  const [timer, setTimer] = useState(0);
  const timerRef = useRef();

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setTimer(0);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  async function handleRecordingStart() {
    const { granted } = await Audio.getPermissionsAsync();

    if (granted) {
      try {
        const { recording } = await Audio.Recording.createAsync();
        setRecording(recording);
        startTimer();
      } catch (error) {
        console.log('error', error);
        Alert.alert('Erro ao gravar', 'Não foi possível iniciar a gravação do áudio.');
      }
    }
  }

  async function handleRecordingStop() {
    try {
      if (recording) {
        await recording.stopAndUnloadAsync();
        const fileUri = recording.getURI();

        console.log(fileUri);

        setRecordingFileURI(fileUri);
        setRecording(null);
        stopTimer();
      }
    } catch (error) {
      console.log('error', error);
      Alert.alert('Erro ao pausar', 'Não foi possível parar a gravação do áudio.');
    }
  }

  useEffect(() => {
    Audio.requestPermissionsAsync().then(({ granted }) => {
      if (granted) {
        Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          interruptionModeIOS: InterruptionModeIOS.DoNotMix,
          playsInSilentModeIOS: true,
          allowsRecordingAndroid: true,
          interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: true,
        });
      }
    });

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <>
      <LowerRectangleContainer>
        <PressableEllipse
          recording={recording}
          onPressIn={handleRecordingStart}
          onPressOut={handleRecordingStop}>
          <Image source={recording ? require('@assets/icons/rec.png') : require('@assets/icons/micPreenchido.png')} style={{ width: recording ? 25 : 21, height: recording ? 25 : 30 }} />
        </PressableEllipse>
        {recording ? <Tempo>{`${formatTime(timer)}`}</Tempo> : <Texto>Segure o Microfone para falar</Texto>}
      </LowerRectangleContainer>

      <UpperRectangleContainer>
        <Content>
            <TouchableOpacity onPress={() => {}}>
                <Image source={require('@assets/icons/Voltar.png')} style={{ width: 14, height: 24 }} />
            </TouchableOpacity>
            <Descricao>Descreva seu sonho</Descricao>
        </Content>
      </UpperRectangleContainer>
    </>
  );
};

const PressableEllipse = styled.Pressable`
  width: 60px;
  height: 60px;
  background-color: ${({ recording }) => (recording ? 'red' : '#9F238E')};
  border-radius: 30px;
  align-self: center;
  margin-top: 65px;
  justify-content: center;
  align-items: center;
  margin-bottom: 22px;
`;

const UpperRectangleContainer = styled.View`
  width: 100%;
  height: 59px;
  background: #222840;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  margin-bottom: 51%;
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
    justify-content: space-between;
    margin-top: 4%;
    margin-left: 6%;
    margin-right: 35%;
`;

export default Record;
