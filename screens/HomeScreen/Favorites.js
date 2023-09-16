/* Creator: Carla Heloisa
 * Data: 13/09/2023
 * Description: Os sonhos favoritados ficarão aqui
 */

import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import styled from 'styled-components/native';
import Background from '@components/Background';
import MainHeader from '@components/Headers/MainHeader';

// Images
import menuIco from '@assets/icons/menu.png'; 
import searchIco from '@assets/icons/search.png';
import optionsIco from 'assets/icons/options.png';

const Favorites = ({ navigation }) => {
    return (
        <Background>
            <Container>
                <MainHeader
                    left={
                        <MenuButton onPress={() => navigation.openDrawer()}>
                            <Image 
                                source={menuIco}
                                style={{ width: 24, height: 20, resizeMode: 'contain' }}
                            />
                        </MenuButton>
                    }
                    right={
                        <RightButtons>
                            <TouchableOpacity>
                                <Image 
                                    source={searchIco}
                                    style={{ width: 24, height: 24, marginHorizontal: 12 }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image 
                                    source={optionsIco}
                                    style={{ width: 5, height: 19, marginHorizontal: 12 }}
                                />
                            </TouchableOpacity>
                        </RightButtons>
                    }
                />
            
                <Content>
                    <Texto>Os itens favoritados aparecerão aqui</Texto>
                </Content>
            </Container>
        </Background>
    );
}

export default Favorites;

const Container = styled.View`
    flex: 1;
`;

const Texto = styled.Text`
    color: #ffffff;
`;

const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const MenuButton = styled.TouchableOpacity`
    /* Adicione estilos para o botão do menu aqui */
`;

const RightButtons = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* Adicione estilos para os botões da direita aqui */
`;