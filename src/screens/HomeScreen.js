import { Animated, Button, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Pressable
                onPress={() => navigation.navigate('Scan', {
                    view: 1,	// Move Pallet
                })}
                onPressIn={() => setIsHovered1(true)}
                onPressOut={() => setIsHovered1(false)}
                style={[styles.btnMoveFT, isHovered1 && styles.btnMoveFThovered]}
            >
                <Text style={styles.btnText}>Move Pallet</Text>
            </Pressable>

            <View style={{ height: 50 }}></View>

            <Pressable
                onPress={() => navigation.navigate('Scan', {
                    view: 2, 	// Inpection Inventory
                })}
                onPressIn={() => setIsHovered2(true)}
                onPressOut={() => setIsHovered2(false)}
                style={[styles.btnMoveOS, isHovered2 && styles.btnMoveOShovered]}
            >
                <Text style={styles.btnText}>Inpection Inventory</Text>
            </Pressable>

            <View style={{ height: 50 }}></View>

            <Pressable style={[styles.btnTest]} onPress={() => navigation.navigate('Test')}>
                <Text style={styles.btnText}>Go to Test Screen</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({

    btnMoveFT: {
        backgroundColor: '#006666',
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 10,
        // ... other styles
    },
    btnMoveFThovered: {
        backgroundColor: '#008080', // Adjust for hover effect
        // ... other hover styles
    },
    btnMoveOS: {
        backgroundColor: '#40e0d0',
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 10,
        // ... other styles
    },
    btnMoveOShovered: {
        backgroundColor: '#3bd6c6', // Adjust for hover effect
        // ... other hover styles
    },
    btnText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    btnTest: {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 10,
    },
});
export default HomeScreen;
