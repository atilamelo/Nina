import React, { useEffect, useState, useCallback } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Background from '@components/Background';
import BackHeader from '@components/Headers/BackHeader';
import SettingsItem from '@components/ConfigComponets/SettingsItem';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notificacoes = ({ navigation }) => {
    const [morningIsChecked, setMorningIsChecked] = useState(false)
    const [nightlyIsChecked, setNightlyIsChecked] = useState(false)

    useEffect(() => {
        const fetchNotifications = async () => {
            const morningValue = await AsyncStorage.getItem('morningNotification');
            const nightlyValue = await AsyncStorage.getItem('nightlyNotification');

            setMorningIsChecked(morningValue === null ? false : JSON.parse(morningValue));
            setNightlyIsChecked(nightlyValue === null ? false : JSON.parse(nightlyValue));
        };

        fetchNotifications();
    }, []);

    const handleMorningNotification = useCallback(async () => {
        setMorningIsChecked((prev) => !prev);
        await AsyncStorage.setItem('morningNotification', JSON.stringify(!morningIsChecked));
    }, [morningIsChecked]);

    const handleNightlyNotification = useCallback(async () => {
        setNightlyIsChecked((prev) => !prev);
        await AsyncStorage.setItem('nightlyNotification', JSON.stringify(!nightlyIsChecked));
    }, [nightlyIsChecked]);

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            windowSoftInputMode="adjustResize"
        >
            <Background>

                <BackHeader onPress={() => { navigation.goBack() }} title={'Notificações'} />

                <ScrollView>
                    <Container>

                        <SettingsItem
                            label="Notificação da manhã"
                            description="Lembre-se de escrever os sonhos"
                            onPress={() => { }}
                            handleCheck={() => { handleMorningNotification() }}
                            showSwitch={true}
                            isChecked={morningIsChecked}
                        />

                        <SettingsItem
                            label="Notificação da noite"
                            description="Lembre-se de revisar os sonhos"
                            onPress={() => { }}
                            handleCheck={() => { handleNightlyNotification() }}
                            showSwitch={true}
                            isChecked={nightlyIsChecked}
                        />

                        <SettingsItem
                            label="Silenciar notificações"
                            description="Defina um intervalo sem notificações"
                            onPress={() => { }}
                            showSwitch={false}
                        />

                    </Container>
                </ScrollView>

            </Background>
        </KeyboardAvoidingView>
    );
}

const Container = styled.View`
    flex: 1;
`;

const styles = {
    container: {
        flex: 1,
    },
};

export default Notificacoes;
