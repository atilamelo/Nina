import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styled from 'styled-components/native';
import MainHeader from '@components/Headers/MainHeader';
import BackHeader from '@components/Headers/BackHeader';
import { Button } from '../Headers/styles';
import backIcon from '@assets/icons/Voltar.png'

const DreamHeader = ({ navigation, favorited, toggleFavorite, toggleDelete}) => {
    const favoritosIcon = favorited
    ? require('@assets/icons/favoritado.png')
    : require('@assets/icons/favoritos.png');
    const compartilharIcon = require('@assets/icons/compartilhar.png');
    const lixoIcon = require('@assets/icons/lixo.png');

    return (
        
        <MainHeader
            left={
                <Button
                    source={backIcon}
                    onPress={() => navigation.goBack()}
                />
            }
            right={
                <>
                    <Button
                        source={favoritosIcon}
                        onPress={toggleFavorite}
                    />

                    <Button
                        source={compartilharIcon}
                        onPress={() => {}}
                    />

                    <Button
                        source={lixoIcon}
                        onPress={toggleDelete}
                    />

                </>
            }
        />
    );
};


export default DreamHeader;
