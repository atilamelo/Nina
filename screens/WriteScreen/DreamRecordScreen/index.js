import React, { useRef, useState, useContext } from 'react';
import { FlatList, View, Animated, Alert } from 'react-native';
import { useRealm, useQuery } from '@databases/realm';
import { DreamContext } from '@contexts/DreamContext';
import Background from '@components/Background';
import Paginator from '@components/Paginator';
import DreamHeader from '@components/Headers/DreamHeader';
import DegradeButton from '@components/Buttons/DegradeButton';
import DreamFooter from '@components/Footers/DreamFooter';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const screens = [
    { key: 1, component: <Step1 /> },
    { key: 2, component: <Step2 /> },
    { key: 3, component: <Step3 /> },
  ]
  
const RegistroSonho = ({ navigation }) => {
    const { dreamData, clearDreamData } = useContext(DreamContext);
    const realm = useRealm();
    const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);


    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentScreenIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    
    const scrollTo = () => {
        if (currentScreenIndex < screens.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentScreenIndex + 1 });
        } if (currentScreenIndex == screens.length - 1) {
            addDream();
        }
    }
      

    async function addDream() {
        try {
            console.log("Dream data => " + JSON.stringify(dreamData))
            dreamObject = realm.objects('Dream').filtered(`_id = "${dreamData.id}"`)[0];

            if (dreamObject !== undefined) {
                realm.write(() => {
                    dreamObject.title = dreamData.title;
                    dreamObject.text = dreamData.text;
                    dreamObject.creationDate = dreamData.creationDate;
                    dreamObject.modificationDate = dreamData.modificationDate;
                    dreamObject.imagePath = dreamData.imagePath;
                    dreamObject.localImagePath = dreamData.localImagePath;
                    dreamObject.audioPath = dreamData.audioPath;
                    dreamObject.selectedTags = dreamData.selectedTags;
                    dreamObject.selectedFeelings = dreamData.selectedFeelings;
                    dreamObject.lucidyRating = dreamData.lucidyRating;
                    dreamObject.realityConection = dreamData.realityConection;
                    dreamObject.recurrence = dreamData.recurrence;
                    dreamObject.favorite = dreamData.favorite;
                    dreamObject.deleted = dreamData.deleted;
                })
            } else {
                realm.write(() => {
                    realm.create('Dream', {
                        _id: dreamData.id,
                        title: dreamData.title || "Sem título",
                        text: dreamData.text,
                        creationDate: dreamData.creationDate,
                        modificationDate: dreamData.modificationDate,
                        imagePath: dreamData.imagePath,
                        localImagePath: dreamData.localImagePath,
                        audioPath: dreamData.audioPath,
                        selectedTags: dreamData.selectedTags,
                        selectedFeelings: dreamData.selectedFeelings,
                        lucidyRating: dreamData.lucidyRating,
                        realityConection: dreamData.realityConection,
                        recurrence: dreamData.recurrence,
                        favorite: dreamData.favorite,
                        deleted: dreamData.deleted,
                    });
                });
            }
            
            clearDreamData();

            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });

} catch (e) {
            console.error(e.message);
            openAlert();
            setTextAlert("Ocorreu um problema ao salvar seu sonho!")
        }
    }


    return (
        <Background>
            <DreamHeader onSkip={addDream} navigation={navigation} />

            <View style={{flex: 1}}>
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
                    iconFile={require('@assets/icons/arrow.png')}
                    iconWidth={22}
                    iconHeight={22}
                />
            </DreamFooter>
        </Background>
    );
};

export default RegistroSonho;