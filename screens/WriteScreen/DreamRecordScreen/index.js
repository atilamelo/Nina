import React, { useRef, useState, useContext } from 'react';
import { FlatList, View, Animated, Alert } from 'react-native';
import { useRealm } from '../../../databases/realm';
import { DreamContext } from '../../../contexts/DreamContext';
import uuid from 'react-native-uuid';
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
    const dreamContext = useContext(DreamContext);
    const dreamData = dreamContext.dreamData;  
    const realm = useRealm();
    const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);


    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentScreenIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    
    const scrollTo = () => {
        if(currentScreenIndex < screens.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentScreenIndex + 1 });
        }
    }

    async function addDream() {
        try{
            console.log("Dream data => " + JSON.stringify(dreamData))
            realm.write(() => {
                realm.create('Dream', {
                    _id: uuid.v4(),
                    title: dreamData.title,
                    text: dreamData.text,
                    date: dreamData.date,
                    imagePath: dreamData.imagePath,
                    selectedTags: dreamData.selectedTags,
                    selectedFeelings:  dreamData.selectedFeelings,
                    lucidyRating:  dreamData.lucidyRating,
                    realityConection: dreamData.realityConection,
                    recurrence: dreamData.recurrence,
                });
            });

            Alert.alert("Sonho", "Sonho salvo com sucesso!");
        } catch (e){
            console.error(e.message);
            Alert.alert("Sonho", "Problema ao salvar o sonho!");
        }
    }

    // Get all Dream in the realm schema Dream 
    async function getDreams() {
        try{
            const dreams = realm.objects('Dream');
            console.log("Sonhos => ", JSON.stringify(dreams, null, 2));
        } catch (e){
            console.log("Erro ao buscar sonhos => " + e.message)
        }
    }

    return (
        <Background>
            <DreamHeader onSkip={addDream} navigation={navigation} />

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