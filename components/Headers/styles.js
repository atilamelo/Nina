import { TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native'
import VoltarImg from '@assets/icons/Voltar.png'

export const BackButton = ( { onPress } ) => {
    return(
        <TouchableOpacity onPress={ onPress }>
            <Image source={VoltarImg} style={{
                width: 18, 
                height: 29,
                resizeMode: 'contain',
            }} />
        </TouchableOpacity>
    )
}

export const Title = ( { text }) => {
    return (
        <TitleStyle>{text}</TitleStyle>
    )
}

const TitleStyle = styled.Text`
    font-family:'Inter Bold';
    color: white;
    font-size: 23px;
    margin-left: 3.5%;
`