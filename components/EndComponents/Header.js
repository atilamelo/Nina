import React from 'react';
import { Button } from '../Headers/styles';
import MainHeader from '@components/Headers/MainHeader';
import backIcon from '@assets/icons/Voltar.png'

const DreamHeader = ({ navigation, favorited, deleted, toggleFavorite, toggleDelete }) => {
    const favoritosIcon = favorited
        ? require('@assets/icons/favoritado.png')
        : require('@assets/icons/favoritos.png');

    const lixoIcon = deleted
        ? require('@assets/icons/restore.png')
        : require('@assets/icons/lixo.png');

    const compartilharIcon = require('@assets/icons/compartilhar.png');

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
                    {!deleted && (
                        <Button
                            source={favoritosIcon}
                            onPress={toggleFavorite}
                        />
                    )}

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
