import React, { useState, useEffect, useRef } from 'react';
import { Image, Alert } from 'react-native';
import styled from 'styled-components/native';
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av';

const Record = ({ onRecordingComplete }) => {
  // Estados para gerenciar a gravação
  const [recording, setRecording] = useState(false);
  const [recordingFileURI, setRecordingFileURI] = useState();
  const [timer, setTimer] = useState(0);
  const timerRef = useRef();

  // Função para iniciar o timer
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  // Função para parar o timer
  const stopTimer = () => {
    clearInterval(timerRef.current);
    setTimer(0);
  };

  // Função para formatar o tempo em minutos e segundos
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  // Função para lidar com o início da gravação
  async function handleRecordingStart() {
    if (recording) {
      // Se já estiver gravando, ignore o início da gravação
      return;
    }

    const { granted } = await Audio.getPermissionsAsync();

    if (granted) {
      try {
        const { recording } = await Audio.Recording.createAsync();
        setRecording(true);
        setRecording(recording);
        startTimer();
      } catch (error) {
        console.log('error', error);
        Alert.alert('Erro ao gravar', 'Não foi possível iniciar a gravação do áudio.');
      }
    }
  }

  // Função para lidar com a parada da gravação
  async function handleRecordingStop() {
    if (!recording) {
      // Se não estiver gravando, ignore a parada da gravação
      return;
    }
    try {
      if (recording) {
        await recording.stopAndUnloadAsync();
        const fileUri = recording.getURI();
        setRecordingFileURI(fileUri);
        setRecording(false);
        stopTimer();
        onRecordingComplete();
      }
    } catch (error) {
      console.log('error', error);
      Alert.alert('Erro ao pausar', 'Não foi possível parar a gravação do áudio.');
    }
  }

  // Efeito colateral para solicitar permissões de áudio ao carregar o componente
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

    // Função de limpeza para parar o timer ao desmontar o componente
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Renderização do componente Record
  return (
    <>
      <LowerRectangleContainer>
        <Content>
          <Descricao>Descreva seu sonho</Descricao>
        </Content>

        <PressableEllipse
          recording={recording}
          onPressIn={handleRecordingStart}
          onPressOut={handleRecordingStop}>
          <Image source={recording ? require('@assets/icons/rec.png') : require('@assets/icons/micPreenchido.png')} style={{ width: recording ? 25 : 21, height: recording ? 25 : 30 }} />
        </PressableEllipse>
        {recording ? <Tempo>{`${formatTime(timer)}`}</Tempo> : <Texto>Aperte ou segure o Microfone para falar</Texto>}
      </LowerRectangleContainer>
    </>
  );
};

const PressableEllipse = styled.Pressable`
  width: 60px;
  height: 60px;
  background-color: ${({ recording }) => (recording ? '#BD2E32' : '#9F238E')};
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
