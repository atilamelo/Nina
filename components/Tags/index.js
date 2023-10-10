import { Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';
import tag from '@assets/icons/tag.png'; 

const TagItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const MenuItemText = styled.Text`
  font-family: 'Inter Regular';
  font-size: 15px;
  color: #FFF;
  margin-left: 20px;
`;

const Tags = ({color, marginLeft, marginTop}) => {
    return (
        <TagItem onPress={() => navigation.navigate()} style={{marginTop: marginTop}}>
            <Image
                source={tag}
                style={{ width: 32, height: 23, resizeMode: 'contain', tintColor: color, marginLeft: marginLeft }}
            />
            <MenuItemText>Tag 1</MenuItemText>
        </TagItem>
    )
}

export default Tags