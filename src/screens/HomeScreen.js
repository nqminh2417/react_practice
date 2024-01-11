/* eslint-disable prettier/prettier */

import { Button, Text, View } from 'react-native';

import React from 'react';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Go to Scan"
                onPress={() => navigation.navigate('Scan')}
            />
        </View>
    );
};

export default HomeScreen;
