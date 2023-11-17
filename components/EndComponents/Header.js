import React from 'react';
import backIcon from '@assets/icons/Voltar.png';
import favoritadoIcon from '@assets/icons/favoritado.png';
import favoritosIcon from '@assets/icons/favoritos.png';
import restoreIcon from '@assets/icons/restore.png';
import lixoIcon from '@assets/icons/lixo.png';
import MainHeader from '@components/Headers/MainHeader';
import { Button } from '../Headers/styles';

const selectIcon = (condition, trueIcon, falseIcon) => condition ? trueIcon : falseIcon;

const DreamHeader = ({
    navigation,
    favorited,
    deleted,
    toggleFavorite,
    toggleDelete,
    toggleRestore
}) => {
    const favoritosIconSelected = selectIcon(favorited, favoritadoIcon, favoritosIcon);

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
                            source={favoritosIconSelected}
                            onPress={toggleFavorite}
                        />
                    )}

                    {toggleRestore && (
                        <Button
                            source={restoreIcon}
                            onPress={toggleRestore}
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