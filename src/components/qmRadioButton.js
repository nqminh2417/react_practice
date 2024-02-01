import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import FAIcon from 'react-native-vector-icons/FontAwesome';

const QmRadioButton = ({
    options,
    onPress,
}) => {
    const [selectedValue, setSelectedValue] = useState(null);
    return (
        <View>
            <FlatList
                data={options}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            key={item.value}
                            style={styles.container}
                            onPress={() => {
                                setSelectedValue(item.value);
                                onPress(item.value);
                            }}
                        >
                            <FAIcon name={selectedValue === item.value ? 'dot-circle-o' : 'circle-o'} size={17} color="#000" />
                            <Text style={styles.text}>{item.label}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#8b9dc3',
        padding: 8,
    },
    text: {
        fontSize: 16,
        color: '#333',
        paddingLeft: 8
    },
});

export default QmRadioButton