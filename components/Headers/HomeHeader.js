import React from 'react';
import { NavigationContext } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import MainHeader from '@components/Headers/MainHeader';
import { Button, Title } from '@components/Headers/styles';

// Images
import menuIco from '@assets/icons/menu.png';
import searchIco from '@assets/icons/search.png';
import sorting from 'assets/icons/sorting.png';

const sizeIcon = 21;

const HomeHeader = ({ title, toggleOptionsModal, showSearch, showSort, showBack }) => {
    const navigation = React.useContext(NavigationContext);
    console.log(title)
    return (
        <MainHeader
        left={
            showBack ? (
                <Button
                    source={backIcon}
                    onPress={() => navigation.goBack()}
                />
            ) : (
                <Button
                    source={menuIco}
                    onPress={() => navigation.openDrawer()}
                />
            )
        }
        middle={
            title !== undefined ? <Title>{title}</Title> : null
        }
        right={     
            <>
                {showSearch && (
                    <Button
                        source={searchIco}
                        // onPress={() => navigation.navigate('Search')}
                    />
                )}

                {showSort && (
                    <Button
                        source={sorting}
                        onPress={toggleOptionsModal}
                    />
                )}
                

                {}
            </>           
            }
        />
    );
};


export default HomeHeader;
