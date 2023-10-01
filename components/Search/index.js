import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import BackHeader from '@components/Headers/BackHeader';

const Container = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10%; 
`;

const SearchInput = styled(TextInput)`
    flex: 1;
`;

const Search = ({ navigation, placeholder }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Search Query:', searchQuery);
  };

  return (
    <Container>
        <BackHeader onPress={() => { navigation.goBack()}} />
        <SearchInput
        placeholder={placeholder || "Pesquisar"}
        placeholderTextColor="#8E8E8E"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        onSubmitEditing={handleSearch}
        style={{ color: 'white', fontSize: 18, marginTop: -17 }}
        />
    </Container>
  );
}

export default Search;
