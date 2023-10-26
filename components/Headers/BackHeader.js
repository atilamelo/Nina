import React from 'react'
import MainHeader from './MainHeader'
import { Button, Title } from './styles'

const BackHeader = ({ onPress, title }) => {
    return (
    <MainHeader
        left={
            <Button 
                onPress={onPress}
                source={require('@assets/icons/Voltar.png')}
        />}
        middle={
            <Title>{title}</Title>}
    />
    )
}

export default BackHeader;
