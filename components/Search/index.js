import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import styled from 'styled-components/native';
import BackHeader from '@components/Headers/BackHeader';
import Background from '@components/Background';

const Pesquisar = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10%;
`;

const SearchInput = styled(TextInput)`
  flex: 1;
  color: white;
  font-size: 18px;
  margin-top: -17px;
  margin-right: 6%;
`;

const Search = ({ navigation, placeholder, onChangeText, value }) => {
  return (
      <Pesquisar>
        <BackHeader onPress={() => navigation.goBack()} />
        <SearchInput
          placeholder={placeholder || 'Pesquisar'}
          placeholderTextColor="#8E8E8E"
          value={value}
          onChangeText={onChangeText}
        />
      </Pesquisar>
  );
};

export default Search;