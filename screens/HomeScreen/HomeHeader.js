import React from 'react';
import { NavigationContext } from '@react-navigation/native';
import { View, TouchableOpacity, Image } from 'react-native';
import MainHeader from '@components/Headers/MainHeader';

// Images
import menuIco from '@assets/icons/menu.png';
import searchIco from '@assets/icons/search.png';
import sorting from 'assets/icons/sorting.png';

const HomeHeader = ({ toggleOptionsModal }) => {
    const navigation = React.useContext(NavigationContext);

    return (
        <MainHeader
        left={
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image 
                    source={menuIco}
                    style={{ width: 24, height: 24, resizeMode: 'contain' }}
                />
            </TouchableOpacity>
        }
        right={
            <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity>
                    <Image 
                        source={searchIco}
                        resizeMode="contain"
                        style={{ width: 24, height: 24, marginHorizontal: 12 }}
                    />
                </TouchableOpacity>

                    <TouchableOpacity onPress={toggleOptionsModal}>
                        <Image
                            source={sorting}
                            style={{ width: 24, height: 20, marginHorizontal: 12 }}
                        />
                    </TouchableOpacity>
                </View>
            }
        />
    );
};

export default HomeHeader;
