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

const Tab = createBottomTabNavigator();
const focusedColor = '#C0C3D0';
const unfocusedColor = '#585C6D';

const AddDreamButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                top: -30,
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
                    height: 80,
                    backgroundColor: '#222840',
                    borderTopWidth: 0,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                },
                tabBarInactiveTintColor: unfocusedColor,
                tabBarActiveTintColor: focusedColor,
                headerShown: false,
            }}
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

            <Tab.Screen name="WriteDreams" component={HomeScreen} options={{
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
                )
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
        width: 27,
        height: 27,
    },
    tabText: {
        paddingTop: 5,
        fontSize: 12,
    },
});


export default Tabs;