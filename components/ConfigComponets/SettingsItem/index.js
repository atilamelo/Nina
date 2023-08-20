import React, { useState } from 'react';
import { TouchableOpacity, Switch } from 'react-native';
import styled from 'styled-components/native';

const ConfigItem = ({ label, description, onPress, showSwitch }) => {

    const [isChecked, setChecked] = useState(false)

    const handleCheck = () => {
        setChecked((prevState) => !prevState)
    }

    return (
        <TouchableItem onPress={onPress}>
            <ItemContainer>
                <Container>
                    <ItemLabel>{label}</ItemLabel>
                    <ItemDescription>{description}</ItemDescription>
                </Container>
                {showSwitch && (
                    <Switch
                        value={isChecked}
                        onValueChange={handleCheck}
                        thumbColor={isChecked ? '#FFFFFF' : '#A8A8A8'}
                        trackColor={{ false: '#1A1F32', true: '#9F238E' }}
                    />
                )}
            </ItemContainer>
        </TouchableItem>
    );
};

const TouchableItem = styled(TouchableOpacity)`
    align-self: center;
`;

const ItemContainer = styled.View`
    width: 330px; 
    height: 60px; 
    background-color: #2B314C;
    border-radius: 13px;
    padding: 10px;
    margin-top: 22px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

const Container = styled.View`
    flex-direction: column;
    justify-content: center; 
`;

const ItemLabel = styled.Text`
    color: #FFFFFF;
    font-size: 14px;
    margin-left: 5%;
    font-family: "Inter Bold";
`;

const ItemDescription = styled.Text`
    color: #A8A8A8;
    font-size: 12px;
    margin-top: 4px;
    margin-left: 5%;
    font-family: "Inter Regular";
`;

export default ConfigItem;
