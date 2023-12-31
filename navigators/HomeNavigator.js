import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { createBottomTabNavigator, CardStyleInterpolators } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import HomeScreen from '@screens/HomeScreen';
import StatisticsScreen from '@screens/StatisticsScreen';
import CalendarScreen from '@screens/CalendarScreen';
import WriteStack from '@navigators/WriteStack';
import ConfigStack from '@navigators/ConfigStack';
import DrawerNavigator from '@navigators/DrawerNavigator';

const Tab = createBottomTabNavigator();

const focusedColor = '#9F238E';
const unfocusedColor = '#585C6D';

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -25,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}
  >
    <LinearGradient
      colors={['#653483', '#9A248D']}
      start={[0, 0]}
      end={[1, 1]}
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#653483',
      }}
    >
      {children}
    </LinearGradient>
  </TouchableOpacity>
);

const TabIcon = ({ focused, source, text }) => (
  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Image
      source={source}
      resizeMode="contain"
      style={{
        width: 26,
        height: 26,
        tintColor: focused ? focusedColor : unfocusedColor,
      }}
    />
  </View>
);

const HomeNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: { 
        position: 'absolute',
        height: 60,
        backgroundColor: '#222840',
        borderTopWidth: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      },
      tabBarInactiveTintColor: unfocusedColor,
      tabBarActiveTintColor: focusedColor,
      headerShown: false,
    }}
    initialRouteName="Home"
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabIcon
            focused={focused}
            source={require('@assets/icons/home.png')}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Statistics"
      component={StatisticsScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabIcon
            focused={focused}
            source={require('@assets/icons/statistics.png')}
          />
        ),
      }}
    />

    <Tab.Screen
      name="WriteDreams"
      component={WriteStack}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('@assets/icons/pen.png')}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              tintColor: '#fff',
            }}
          />
        ),
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
        tabBarStyle: { display: 'none' },
      }}
    />

    <Tab.Screen
      name="Calendar"
      component={CalendarScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabIcon
            focused={focused}
            source={require('@assets/icons/calendar.png')}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Settings"
      component={ConfigStack}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabIcon
            focused={focused}
            source={require('@assets/icons/settings.png')}
          />
        ),
      }}
    />

  <Tab.Screen
      name="DreamPage"
      component={ConfigStack}
      options={{
        tabBarButton: () => null,
        tabBarVisible: false
      }}
    />

  </Tab.Navigator>
);

export default HomeNavigator;
