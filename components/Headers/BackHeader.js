import React from 'react'
import MainHeader from './MainHeader'
import { BackButton, Title } from './styles'

const BackHeader = ({ onPress, title }) => {
    return (
    <MainHeader
        left={<BackButton onPress={onPress} sosurce={require('@assets/icons/Voltar.png')} />}
        middle={<Title text={title}/>}
    />
    )
}

export default BackHeader;
