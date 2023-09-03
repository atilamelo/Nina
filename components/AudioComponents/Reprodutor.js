import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import micIcon from '@assets/icons/mic.png';
import SeekBar from '@components/AudioComponents/SeekBar';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AudioButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 330px;
  height: 54px;
  margin-top: 10%;
  border-radius: 13px;
  background-color: #2B314C;
`;

const IconContainer = styled.View`
  padding: 14px;
`;

const PauseContainer = styled.View`
  margin-right: 10px;
  margin-left: 14px;
`;

const MicIcon = styled.Image`
  width: 19px;
  height: 28px;
`;

const seekBarStyles = {
  thumbColor: '#9F238E',
  trackColor: '#9D9D9D',
};

function AudioPlayer({ audioSource }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundObject, setSoundObject] = useState(null);
  const [soundPosition, setSoundPosition] = useState(0);
  const [soundDuration, setSoundDuration] = useState(0);
  const [pausedPosition, setPausedPosition] = useState(0); // Adiciona o estado para armazenar a posição pausada.

  const onSeek = async (newValue) => {
    if (soundObject) {
      try {
        await soundObject.setPositionAsync(newValue);
        setSoundPosition(newValue);
  
        // Se o áudio estiver pausado, inicie-o ao mexer na barra.
        if (!isPlaying) {
          await soundObject.playAsync();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error('Erro ao buscar a posição de reprodução:', error);
      }
    }
  };

  const onSlidingStart = () => {
    if (isPlaying) {
      // Pausa o áudio e salva a posição pausada.
      setPausedPosition(soundPosition);
    }
  };

  useEffect(() => {
    if (soundObject) {
      soundObject.setOnPlaybackStatusUpdate(async (status) => {
        if (status.isLoaded && status.isPlaying) {
          setSoundPosition(status.positionMillis);
          setSoundDuration(status.durationMillis);
        }
        if (status.didJustFinish) {
          // O áudio chegou ao fim, o ícone é alterado para "play".
          setIsPlaying(false);
          // Define a posição de reprodução de volta ao início.
          setSoundPosition(0);
        }
      });
    }
  }, [soundObject]);

  async function playAudio() {
    if (!soundObject) {
      const newSoundObject = new Audio.Sound();
      try {
        await newSoundObject.loadAsync(audioSource);
        setSoundObject(newSoundObject);
  
        // Verifique se a posição atual é 0 (no início) e inicie o áudio a partir do início.
        if (soundPosition === 0) {
          await newSoundObject.replayAsync();
        } else if (pausedPosition > 0) {
          // Se houver uma posição pausada, defina a posição e continue a reprodução.
          await newSoundObject.setPositionAsync(pausedPosition);
          setSoundPosition(pausedPosition);
        } else {
          await newSoundObject.playAsync();
        }
  
        setIsPlaying(true);
      } catch (error) {
        console.error('Erro ao reproduzir áudio:', error);
      }
    } else {
      if (isPlaying) {
        // Pausa o áudio e salva a posição pausada.
        await soundObject.pauseAsync();
        setPausedPosition(soundPosition);
      } else {
        // Continue a reprodução a partir da posição pausada ou do início se a posição atual for 0.
        if (soundPosition === 0) {
          await soundObject.replayAsync();
        } else {
          await soundObject.playAsync();
        }
      }
      setIsPlaying(!isPlaying);
    }
  }

  return (
    <Container>
      <AudioButton>
        <PauseContainer>
          <Ionicons onPress={playAudio} name={isPlaying ? 'ios-pause' : 'ios-play'} size={24} color="white" />
        </PauseContainer>
        <SeekBar
          trackLength={soundDuration}
          currentPosition={soundPosition}
          onSeek={onSeek}
          onSlidingStart={onSlidingStart}
          styles={seekBarStyles}
        />
        <IconContainer>
          <MicIcon source={micIcon} />
        </IconContainer>
      </AudioButton>
    </Container>
  );
}

export default AudioPlayer;
