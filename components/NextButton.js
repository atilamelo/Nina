import React from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';


const ArrowIcon = styled.Image`
    width: 22px;
    height: 22px;
`


const NextButton = ( onClick ) => {
    return (
        <TouchableOpacity onPress={() => {onClick}}>
            <LinearGradient
                colors={['#703E8E', '#9A248D']} // Define your gradient colors
                start={[0, 0]} // Start point of the gradient
                end={[1, 1]} // End point of the gradient
                style={{
                    width: 59,
                    height: 59,
                    borderRadius: 59,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <ArrowIcon source={require('../assets/icons/arrow.png')} />
            </LinearGradient>
        </TouchableOpacity>
    );
};


export default NextButton;