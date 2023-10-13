import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';

import menuIco from '@assets/icons/menu.png';

const MenuButton = styled.TouchableOpacity`
`;

const DrawerHeader = ({ left, middle, right, navigation }) => {
    return (
        <MainContainer>
            <LeftContainer>
                <MenuButton onPress={() => navigation.openDrawer()}>
                    <Image
                        source={menuIco}
                        style={{ width: 24, height: 20, resizeMode: 'contain' }}
                    />
                </MenuButton>
            </LeftContainer>
        </MainContainer>
    );
};

export default DrawerHeader;

const MainContainer = styled.View`
  height: 11%;
  margin-horizontal: 5%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 2%;
`;

const LeftContainer = styled.View`
  align-items: center;
  justify-content: center;

`;