import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import UserAccount from '../screens/UserAccount/UserAccount';
import Favourite from '../screens/Favourite/Favourite';
import { colors } from '../styles/colors';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.YELLOW,
        tabBarInactiveTintColor: '#8e8e93',
        tabBarStyle: {
          backgroundColor: colors.GREEN,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focusedIconWrapper : styles.iconWrapper}>
              <Icon
                name="heart"
                size={24}
                color={focused ? colors.YELLOW : '#8e8e93'}
              />
            </View>
          ),
          tabBarLabel: () => null,
          tabBarIconStyle: {
            marginTop: 10,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserAccount}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focusedIconWrapper : styles.iconWrapper}>
              <Icon
                name="person"
                size={24}
                color={focused ? colors.YELLOW : '#8e8e93'}
              />
            </View>
          ),
          tabBarLabel: () => null,
          tabBarIconStyle: {
            marginTop: 10,
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  focusedIconWrapper: {
    width: 50, 
    height: 50,
    borderRadius: 25, 
    backgroundColor: colors.GREEN, 
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomTabNavigator;
