import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/AntDesign'

const countries = [
    { country: 'Vietnam', code: 'VN' },
    { country: 'Thailand', code: 'TH' },
    { country: 'China', code: 'CN' },
];
const QmDropdown = ({
    width
}) => {
    const [selectedCountry, setSelectedCountry] = useState('selectedCountry');
    const [isClicked, setIsClicked] = useState(false);
    const [data, setData] = useState(countries);
    return (
        <View style={{ width: width }}>
            <TouchableOpacity
                style={styles.dropdownSelector}
                onPress={() => {
                    setIsClicked(!isClicked);
                }}
            >
                <Text>{selectedCountry}</Text>
                <Icon name={isClicked ? 'up' : 'down'} size={20} color="#000" />
            </TouchableOpacity>
            {isClicked && (
                <View style={[styles.dropdownArea]}>
                    <FlatList

                        data={data}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    style={styles.item}
                                    onPress={() => {
                                        setSelectedCountry(item.country);
                                        setIsClicked(false);
                                    }}
                                >
                                    <Text style={{}}>{item.country}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    dropdownSelector: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderWidth: .5,
        borderColor: '#8e8e8e',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    dropdownArea: {
        position: 'absolute',
        width: '100%',
        // height: 300,
        borderWidth: .5,
        borderColor: '#8e8e8e',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 55,
        backgroundColor: '#fff',
        elevation: 5,
    },
    item: {
        width: '100%',
        height: 50,
        borderBottomWidth: .2,
        borderBottomColor: '#8e8e8e',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
});

export default QmDropdown