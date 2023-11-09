import React from 'react';
import { NavigationContext } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import MainHeader from '@components/Headers/MainHeader';
import { Button, Title } from '@components/Headers/styles';

// Images
import menuIco from '@assets/icons/menu.png';
import searchIco from '@assets/icons/search.png';
import sorting from 'assets/icons/sorting.png';
import grid from '@assets/icons/grid.png';
import list from '@assets/icons/list.png';

const HomeHeader = ({ title, dreamData, toggleOptionsModal, toggleView, viewGrid, showSearch, showSort, showBack, showView }) => {
    const navigation = React.useContext(NavigationContext);

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
                    {showView && (
                        <Button
                            source={viewGrid ? list : grid}
                            onPress={toggleView}
                        />
                    )
                    }



                    {showSort && (
                        <Button
                            source={sorting}
                            onPress={toggleOptionsModal}
                        />
                    )}

                    {showSearch && (
                        <Button
                            source={searchIco}
                            onPress={() => navigation.navigate('Search', { props: { dreamData: dreamData } })}
                        />
                    )}


                    { }
                </>
            }
        />
    );
};


export default HomeHeader;
