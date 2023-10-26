import { TouchableOpacity, Image, Text } from 'react-native';

const sizeIcon = 21;

export const Button = ( { source, onPress } ) => {
    return (
        <TouchableOpacity onPress={ onPress }>
            <Image
                source={source}
                resizeMode='contain'
                style={{ width: sizeIcon, height: sizeIcon }}
            />
        </TouchableOpacity>
    )
}

export const Title = ( { children: text } ) => {
    return (
        <Text style={{
            color: 'white',
            fontSize: 19,
            fontFamily: 'Inter Medium'
        }}>
            {text}
        </Text>
    )
}
