import React, { useRef, useState } from 'react';
import { FlatList, View, Animated } from 'react-native';
import Background from '../../../components/Background/Background';
import styled from 'styled-components/native';
import QuestionNavigationHeader from '../../../components/Headers/QuestionNavigationHeader';
import NextButton from '../../../components/NextButton';
import Screen1 from './Screen1';
import Paginator from './Paginator';

const screens = [
    { key: 1, component: <Screen1 /> },
    { key: 2, component: <Screen1 /> },
    { key: 3, component: <Screen1 /> },
  ]
const Etapa1Registro = ({ navigation }) => {
    const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);


    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentScreenIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const handleSkip = () => {};
    const handleBack = () => {};
    
    const scrollTo = () => {
        if(currentScreenIndex < screens.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentScreenIndex + 1 });
        }
    }


    return (
        <Background>
            <QuestionNavigationHeader onSkip={handleSkip} onBack={handleBack} />

            <View>
                <FlatList
                    data={screens}
                    renderItem={({ item }) => item.component}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.key}
                    pagingEnabled
                    bounces={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>

            <Paginator data={screens} scrollx={scrollX}/>

            <BottomBarContainer>
                <NextButton onPress={scrollTo}/>
            </BottomBarContainer>
        </Background>
    );
};

export default Etapa1Registro;

const QuestionsContainer = styled.View`
    `

const BottomBarContainer = styled.View`
    flex: 1;
    position: absolute;
    width: 100%;
    bottom: 6.5%;
    padding-right: 25px;
    align-items: flex-end;
    align-self: flex-end;
`;

const MainContent = styled.View`
    flex: 1;
`
