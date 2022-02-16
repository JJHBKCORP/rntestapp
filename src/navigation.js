import * as React from 'react';

import {NavigaionContainer} from '@react-navigation/native';
import {createNavigator, createStackNavigator} from '@react-navigation/stack';
import UserLoginScreen from './userloginscreen';
import HomeScreen from './homescreen';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigaionContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          gestureEnabled: true,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={UserLoginScreen} />
      </Stack.Navigator>
    </NavigaionContainer>
  );
};
