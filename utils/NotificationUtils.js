import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setupNotifications = () => {
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: false,
            shouldSetBadge: false,
        }),
    });
};

export const isPermissionGranted = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    return status === 'granted';
};

const scheduleNotification = async (title, body, data, hour, minute, storageKey) => {
    console.log("Notification schedule", title, body, data, hour, minute, storageKey)
    const notificationId = await Notifications.scheduleNotificationAsync({
        content: {
            title,
            body,
            data: { data },
        },
        trigger: { 
            hour: hour,
            minute: minute,
            repeats: true,
        }
    });

    await AsyncStorage.setItem(storageKey, JSON.stringify(notificationId));
};

export const activateMorningNotifications = async ( hour, minute ) => {
    if (await isPermissionGranted()) {
        if(AsyncStorage.getItem('morningNotificationId')){
            await cancelMorningNotifications();
        }
        await scheduleNotification("Bom dia!", "Lembre-se de escrever seus sonhos", 'morning', hour, minute, 'morningNotificationId');
    } else {
        const { status } = await Notifications.requestPermissionsAsync();

        if (status === 'granted') {
            await activateMorningNotifications();
        }
    }
};

export const activateNightlyNotifications = async ( hour, minute ) => {
    if (await isPermissionGranted()) {
        if(AsyncStorage.getItem('nightlyNotificationId')){
            await cancelNightlyNotifications();
        }

        await scheduleNotification("Boa noite!", "Lembre-se de revisar seus sonhos", 'evening', hour, minute, 'nightlyNotificationId');
    } else {
        const { status } = await Notifications.requestPermissionsAsync();

        if (status === 'granted') {
            await activateNightlyNotifications();
        }
    }
};

export const cancelSpecificNotification = async (notificationId) => {
    if (notificationId === null) {
        return;
    }
    console.log('Notificação com id: ' + notificationId + ' cancelada');
    await Notifications.cancelScheduledNotificationAsync(notificationId);
};

export const cancelNightlyNotifications = async () => {
    const notificationId = await AsyncStorage.getItem('nightlyNotificationId');
    await cancelSpecificNotification(notificationId);
};

export const cancelMorningNotifications = async () => {
    try {
        const notificationId = await AsyncStorage.getItem('morningNotificationId');
        await cancelSpecificNotification(notificationId);
    } catch (e) {
        console.log(e);
    }
}

