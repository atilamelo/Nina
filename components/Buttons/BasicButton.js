import React from 'react';
import { Image } from 'react-native'  
import { TouchableOpacity } from 'react-native';

const BasicButton = ( { onPress, iconFile, iconWidth, iconHeight, bg } ) => {
    return (
        <TouchableOpacity 
          	onPress={onPress}
          	style={{
				width: 59,
				height: 59,
				borderRadius: 59,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: bg ? bg : '#2B314C',
        }}>

			<Image 
				source={iconFile}
				style={{
					width: iconWidth ? iconWidth : 22,
					height: iconHeight ? iconWidth : 22,
					resizeMode: 'contain',
				}}
			/>
			
        </TouchableOpacity>
    );
};

export default BasicButton;