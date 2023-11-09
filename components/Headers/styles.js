import { TouchableOpacity, Image, Text, View } from 'react-native';

const sizeIcon = 21;

export const Button = ({ source, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ padding: 10 }}>
                <Image
                    source={source}
                    resizeMode='contain'
                    style={{ width: sizeIcon, height: sizeIcon }}
                />
            </View>
        </TouchableOpacity>
    )
}

export const Title = ({ children: text }) => {
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
