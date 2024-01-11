/* eslint-disable prettier/prettier */

import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ScanResult from '../screens/ScanResult';
import ScanScreen from '../screens/ScanScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Scan" component={ScanScreen} />
                <Stack.Screen name="ScanResult" component={ScanResult} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
