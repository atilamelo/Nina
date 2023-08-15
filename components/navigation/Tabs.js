/* Creator: Átila Melo
 * Data: 28/06/2023
 * Description: Create the navigation bar of the app
 * Credits: www.youtube.com/watch?v=gPaBicMaib4
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native';

import HomeScreen from '../../screens/main-screens/HomeScreen';
import StatisticsScreen from '../../screens/main-screens/StatisticsScreen';
import CalendarScreen from '../../screens/main-screens/CalendarScreen';
import ConfigScreen from '../../screens/main-screens/ConfigScreen';
import WriteNavigator from '../../screens/main-screens/WriteScreen/WriteNavigator';
import RegistroSonho from '../../screens/main-screens/RegistroSonho/RegistroSonho';

const Tab = createBottomTabNavigator();
const focusedColor = '#9F238E';
const unfocusedColor = '#585C6D';

const AddDreamButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                top: -25,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={onPress}
        >
            <View style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: '#653483'
            }}>
                {children}
            </View>
        </TouchableOpacity>
    );
}


const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    height: 60,
                    backgroundColor: '#222840',
                    borderTopWidth: 0,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                },
                tabBarInactiveTintColor: unfocusedColor,
                tabBarActiveTintColor: focusedColor,
                headerShown: false,
                
            }}
            initialRouteName='WriteDreams'
        >
            <Tab.Screen name="Sonhos" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabIconContainer}>
                        <Image
                            source={require('../../assets/icons/home.png')}
                            resizeMode="contain"
                            style={[styles.tabIcon, { tintColor: focused ? focusedColor : unfocusedColor }]}
                        />
                        <Text style={[styles.tabText, { color: focused ? focusedColor : unfocusedColor }]}>Home</Text>
                    </View>
                ),
            }} />

            <Tab.Screen name="Estatistícas" component={StatisticsScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabIconContainer}>
                        <Image
                            source={require('../../assets/icons/statistics.png')}
                            resizeMode="contain"
                            style={[styles.tabIcon, { tintColor: focused ? focusedColor : unfocusedColor }]}
                        />
                        <Text style={[styles.tabText, { color: focused ? focusedColor : unfocusedColor }]}>Estatistícas</Text>
                    </View>
                ),
            }} />

            <Tab.Screen name="WriteDreams" component={WriteNavigator} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../../assets/icons/pen.png')}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: '#fff'
                        }}
                    />
                ),
                tabBarButton: ( props ) => (
                    <AddDreamButton  { ... props}/>
                ),
                tabBarStyle: {display: 'none'}
            }}/>

            <Tab.Screen name="Calendário" component={CalendarScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabIconContainer}>
                        <Image
                            source={require('../../assets/icons/calendar.png')}
                            resizeMode="contain"
                            style={[styles.tabIcon, { tintColor: focused ? focusedColor : unfocusedColor }]}
                        />
                        <Text style={[styles.tabText, { color: focused ? focusedColor : unfocusedColor }]}>Calendário</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Configurações" component={ConfigScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabIconContainer}>
                        <Image
                            source={require('../../assets/icons/settings.png')}
                            resizeMode="contain"
                            style={[styles.tabIcon, { tintColor: focused ? focusedColor : unfocusedColor }]}
                        />
                        <Text style={[styles.tabText, { color: focused ? focusedColor : unfocusedColor }]}>Config.</Text>
                    </View>
                ),
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabIcon: {
        width: 23,
        height: 23,
    },
    tabText: {
        paddingTop: 5,
        fontSize: 11,
    },
});


export default Tabs;