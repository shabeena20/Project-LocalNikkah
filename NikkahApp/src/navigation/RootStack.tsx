import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { screens } from "../screens/index";
import BottomTabNavigator from './BottomTabNavigator';

export type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  EmailSignUp: undefined;
  VerifyEmail: { email: string };
  MasjidLocator: undefined;
  NameForm:undefined;
  GenderSelection:undefined;
  SelectDob:undefined;
  UserAccount:undefined;
  Favourite:undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={screens.SplashScreen} />
        <Stack.Screen name="Welcome" component={screens.Welcome} />
        <Stack.Screen name="EmailSignUp" component={screens.EmailSignUp} />
        <Stack.Screen name="VerifyEmail" component={screens.VerifyEmail} />
        <Stack.Screen name="MasjidLocator" component={screens.MasjidLocator} />
        <Stack.Screen name="NameForm" component={screens.NameForm} />
        <Stack.Screen name="GenderSelection" component={screens.GenderSelection} />
        <Stack.Screen name="SelectDob" component={screens.SelectDob} />
        <Stack.Screen name="UserAccount" component={BottomTabNavigator}/>
        <Stack.Screen name="Favourite" component={BottomTabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
