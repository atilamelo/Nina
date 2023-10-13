import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styled from 'styled-components/native';
import MainHeader from '@components/Headers/MainHeader';
import BackHeader from '@components/Headers/BackHeader';

const DreamHeader = ({ navigation, favorited, toggleFavorite, toggleDelete}) => {
    const favoritosIcon = favorited
    ? require('@assets/icons/favoritado.png')
    : require('@assets/icons/favoritos.png');
    const compartilharIcon = require('@assets/icons/compartilhar.png');
    const lixoIcon = require('@assets/icons/lixo.png');

    const FavoriteButton = styled.TouchableOpacity`
    margin-right: 12px;
  `;

    const FavoriteImage = styled.Image`
        width: 24px;
        height: 24px;
        margin-horizontal: 12px;
    `;

    return (
        <MainHeader
            left={
                <View style={{ width: 1, marginTop: 30 }}>
                    <BackHeader onPress={() => navigation.goBack()} />
                </View>
            }
            right={
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <FavoriteButton onPress={toggleFavorite}>
                    <FavoriteImage source={favoritosIcon} />
                </FavoriteButton>

                <TouchableOpacity>
                    <Image source={compartilharIcon} style={{ width: 24, height: 24, marginHorizontal: 12 }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={toggleDelete}>
                    <Image source={lixoIcon} style={{ width: 24, height: 24, marginHorizontal: 12 }} />
                </TouchableOpacity>
                </View>
            }
        />
    );
};


export default DreamHeader;
