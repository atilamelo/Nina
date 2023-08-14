import React from 'react';
import { Image } from 'react-native'  
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';

const DegradeButton = ( { onPress, iconFile, iconWidth, iconHeight } ) => {
    return (
        <TouchableOpacity onPress={onPress}>
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
                <Image 
                    source={iconFile}
                    style={{
                        width: iconWidth ? 22 : iconWidth,
                        height: iconHeight ? 22 : iconHeight,
                    }}
                />
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default DegradeButton;