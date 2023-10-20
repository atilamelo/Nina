import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import micIcon from '@assets/icons/mic.png';
import SeekBar from '@components/EndComponents/AudioComponents/SeekBar';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AudioButton = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 59%;
  margin-top: 10%;
  border-radius: 13px;
  background-color: #2B314C;
`;

const IconContainer = styled.View`
  padding: 16px;
`;

const PauseContainer = styled.TouchableOpacity`
  padding: 14px;
`;

const MicIcon = styled.Image`
  width: 19px;
  height: 28px;
`;

const seekBarStyles = {
  thumbColor: '#9F238E',
  trackColor: '#9D9D9D',
};

function AudioPlayer({ audioSource, disabled, onPress }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundObject, setSoundObject] = useState(null);
  const [soundPosition, setSoundPosition] = useState(0);
  const [soundDuration, setSoundDuration] = useState(0);
  const [pausedPosition, setPausedPosition] = useState(0);
  
  useEffect(() => {
    setIsPlaying(false);
    setSoundPosition(0);
    newSoundObject();
  }, [audioSource])

  useEffect(() => {
    // Atualizações de status do playback
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
      newSoundObject();
    } else {
      // Pausa ou retoma a reprodução
      if (isPlaying) {
        await soundObject.pauseAsync();
        setPausedPosition(soundPosition);
      } else {
        // Continua a reprodução a partir da posição pausada ou do início se a posição atual for 0.
        if (soundPosition === 0) {
          await soundObject.replayAsync();
        } else {
          await soundObject.playAsync();
        }
      }
      setIsPlaying(!isPlaying);
    }
  }

  async function newSoundObject(){
    // Cria um novo objeto de áudio se não existir
    const newSoundObject = new Audio.Sound();
    
    try {
      await newSoundObject.loadAsync(audioSource);
      setSoundObject(newSoundObject);
      
    } catch (error) {
      console.error('Erro ao criar novo som:', error);
    }
  }

  return (
    <Container>
      <AudioButton disabled={disabled} onPress={onPress}>
        <PauseContainer onPress={playAudio}>
          <Ionicons onPress={playAudio} name={isPlaying ? 'ios-pause' : 'ios-play'} size={24} color="white" />
        </PauseContainer>
        <SeekBar
          trackLength={soundDuration}
          currentPosition={soundPosition}
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