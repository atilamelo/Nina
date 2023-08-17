import React, { useRef, useState } from 'react';
import { FlatList, View, Animated } from 'react-native';
import Background from '../../../components/Background';
import styled from 'styled-components/native';
import DreamHeader from '../../../components/Headers/DreamHeader';
import DegradeButton from '../../../components/Buttons/DegradeButton';
import BasicButton from '../../../components/Buttons/BasicButton';
import DreamFooter from '../../../components/Footers/DreamFooter';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Paginator from '../../../components/Paginator';

const screens = [
    { key: 1, component: <Step1/> },
    { key: 2, component: <Step2/> },
    { key: 3, component: <Step3/> },
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
    
    const scrollTo = () => {
        if(currentScreenIndex < screens.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentScreenIndex + 1 });
        }
    }


    return (
        <Background>
            <DreamHeader onSkip={handleSkip} navigation={navigation} />

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

            <DreamFooter style={{justifyContent: 'flex-end'}}>
                
                <DegradeButton 
                    onPress={scrollTo}
                    iconFile={require('../../../assets/icons/arrow.png')}
                    iconWidth={22}
                    iconHeight={22}
                />
            </DreamFooter>
        </Background>
    );
};

export default RegistroSonho;