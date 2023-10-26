import React from 'react';
import { View, TextInput } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import { Button } from './styles';
import styled from 'styled-components/native';
import MainHeader from './MainHeader';
import menuIcon from '@assets/icons/menu.png';
import backIcon from '@assets/icons/Voltar.png'


const Pesquisar = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SearchInput = styled(TextInput)`
  flex: 1;
  color: white;
  font-size: 18px;
`;

const SearchHeader = ( { drawer, placeholder, onChangeText, value } ) => {
    const navigation = React.useContext(NavigationContext);
    console.log(drawer)
    return (
        <MainHeader
            left={
                drawer ? (
                    <Button
                        source={menuIcon}
                        onPress={() => navigation.openDrawer()}
                    />
                ) : (
                    <Button
                        source={backIcon}
                        onPress={() => navigation.goBack()}
                    />
                )
            }
            middle={
                <Pesquisar>
                    <SearchInput
                        placeholder={placeholder || 'Pesquisar'}
                        placeholderTextColor="#8E8E8E"
                        value={value}
                        onChangeText={onChangeText}
                    />
                </Pesquisar>
            }
        />
    );
};


export default SearchHeader;
