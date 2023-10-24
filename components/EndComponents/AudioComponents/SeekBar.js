import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Slider } from '@react-native-assets/slider'
import styled from 'styled-components/native';

const StyledSlider = styled(Slider)`
  width: 90%;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;


const SeekBar = ({
  trackLength,
  currentPosition,
  onSeek,
  onSlidingStart,
  styles,
}) => {
  return (
    <Container>
      <StyledSlider
        maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSeek}
        value={currentPosition}
        thumbTintColor={styles.thumbColor}
        minimumTrackTintColor={styles.thumbColor}
        maximumTrackTintColor={styles.trackColor}
        pointerEvents="none"
      />
    </Container>
  );
};


export default SeekBar;


