import React from 'react';
import { NavigationContext } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import MainHeader from '@components/Headers/MainHeader';

// Images
import menuIco from '@assets/icons/menu.png';
import searchIco from '@assets/icons/search.png';
import sorting from 'assets/icons/sorting.png';
import styled from 'styled-components';

const sizeIcon = 21;

const HomeHeader = ({ title, toggleOptionsModal, showSearch, showSort }) => {
    const navigation = React.useContext(NavigationContext);

    return (
        <MainHeader
        left={
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image 
                    source={menuIco}
                    style={{ width: sizeIcon, height: sizeIcon, resizeMode: 'contain' }}
                />
            </TouchableOpacity>
        }
        middle={
            title !== undefined ? <Title>{title}</Title> : null
        }
        right={
            <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
                
                {showSearch && (
                    <TouchableOpacity>
                        <Image 
                            source={searchIco}
                            resizeMode="contain"
                            style={{ width: sizeIcon, height: sizeIcon, marginHorizontal: 24 }}
                        />
                    </TouchableOpacity>
                )}

                {showSort && (
                    <TouchableOpacity onPress={toggleOptionsModal}>
                        <Image
                            source={sorting}
                            style={{ width: sizeIcon, height: sizeIcon }}
                        />
                    </TouchableOpacity>
                )}
            </View>
            }
        />
    );
};

const Title = styled.Text`
    color: white;
    font-size: 19px;
    font-family: 'Inter Medium';
`;

export default HomeHeader;
