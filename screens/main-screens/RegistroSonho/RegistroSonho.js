import React, { useRef, useState } from 'react';
import { FlatList, View, Animated } from 'react-native';
import Background from '../../../components/Background/Background';
import styled from 'styled-components/native';
import QuestionNavigationHeader from '../../../components/Headers/QuestionNavigationHeader';
import DegradeButton from '../../../components/DegradeButton';
import BasicButton from '../../../components/BasicButton';
import BottomBar from '../../../components/BottomBar';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Paginator from '../../../components/Paginator';

const screens = [
    { key: 1, component: <Screen1/> },
    { key: 2, component: <Screen2/> },
    { key: 3, component: <Screen3/> },
  ]
const RegistroSonho = ({ navigation }) => {
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

            <BottomBar style={{justifyContent: 'flex-end'}}>
                
                <DegradeButton 
                    onPress={scrollTo}
                    iconFile={require('../../../assets/icons/arrow.png')}
                    iconWidth={22}
                    iconHeight={22}
                />
            </BottomBar>
        </Background>
    );
};

export default RegistroSonho;