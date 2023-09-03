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

  useEffect(() => {
    if (soundObject) {
      soundObject.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.isPlaying) {
          setSoundPosition(status.positionMillis);
          setSoundDuration(status.durationMillis);
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
        await newSoundObject.playAsync();
        setIsPlaying(true);
      } catch (error) {
        console.error('Erro ao reproduzir áudio:', error);
      }
    } else {
      if (isPlaying) {
        await soundObject.stopAsync();
      } else {
        await soundObject.playAsync();
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
          onSeek={() => {}}
          onSlidingStart={() => {}}
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