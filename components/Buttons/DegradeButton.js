import React from 'react';
import { Image, View } from 'react-native'  
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';

const DegradeButton = ( { onPress, iconFile, iconWidth, iconHeight } ) => {
    return (
        <View>
        <TouchableOpacity onPress={onPress} style={{width: 59}}>
            <LinearGradient
                colors={['#653483', '#9A248D']} // Define your gradient colors
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
                        width: iconWidth ? iconWidth : 22,
                        height: iconHeight ? iconHeight : 22,
                    }}
                />
            </LinearGradient>
        </TouchableOpacity>
        </View>
    );
};

export default DegradeButton;