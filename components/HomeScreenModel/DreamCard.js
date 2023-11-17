import React, { useContext } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import styled from 'styled-components/native';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

const MainContent = styled.View`
    width:100%;
    background-color: #2B314C;
    border-radius: 7px;
    padding: 10%;
`;

const ExtraInfo = styled.View`
    align-items: center;
`;

const TagContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`;

const TagCard = styled.View`
    padding-horizontal: 10px;
    margin-right: 10px;
    border-radius: 6px;
    background-color: #4E5473;
`;

const StyledText = styled.Text`
    color: #fff;
    font-family: 'Inter Regular';
    line-height: 20px;
`;

const Title = styled(StyledText)`
    font-family: 'Inter Bold';
    font-size: 14px;
    text-align: center;
    margin-top: 5%;
    margin-bottom: 1%;
`;

const TagTitle = styled(StyledText)`
    font-size: 11px;
`;

const DateText = styled(StyledText)`
    color: #686565;
    font-family: 'Inter Regular';
    font-size: 12px;
    text-align: center;
    margin-top: 0px;
`;

const formatDate = (date) => {
    return format(new Date(date), "dd 'de' MMMM 'de' yyyy, HH:mm", { locale: ptBR });
};

const DreamCard = ({ dream }) => {
    const navigation = useContext(NavigationContext);

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('EndDreamScreen', { props: { ...dream } })}
            style={{ width: '100%' }}
        >
            <MainContent>
                <StyledText numberOfLines={5}>{dream.text}</StyledText>

                <TagContainer style={{ width: '100%' }}>
                    <ScrollView
                        contentContainerStyle={{ alignItems: 'center' }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        nestedScrollEnabled={true}
                    >
                        {dream.selectedTags.map((tag) => (
                            <TagCard>
                                <TagTitle>{tag.name}</TagTitle>
                            </TagCard>
                        ))}
                    </ScrollView>
                </TagContainer>
            </MainContent>

            <ExtraInfo>
                <Title numberOfLines={2}>{dream.title}</Title>
                <DateText>{formatDate(dream.creationDate)}</DateText>
            </ExtraInfo>

        </TouchableOpacity>
    );
};

export default DreamCard;