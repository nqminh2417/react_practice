import { ALert, ActivityIndicator, Alert, Animated, Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import QmDropdown from '../components/qmDropdown';
import QmRadioButton from '../components/qmRadioButton';
import { useTranslation } from 'react-i18next';

const options = [
    { label: 'Vietnam', value: 'VN' },
    { label: 'Thailand', value: 'TH' },
    { label: 'China', value: 'CN' },
];
const TestScreen = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [productData, setProductData] = useState(null);
    const [isPressed, setIsPressed] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        // getFakeApi();
    }, []);

    const testClick = () => {
        console.log('testClick');
    };

    const handlePressIn = () => {
        setIsPressed(true);
        console.log('pressIn');
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };


    const showAlertMessage = (mes) => {
        const m = mes["result"];
        Alert.alert(
            'Message',
            m,
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => console.log('OK Pressed'), style: 'ok' }
            ],
            {
                cancelable: true,
                onDismiss: () => console.log('Alert Dismissed')
            }
        );
    };

    const handleConfirm = async () => {
        try {
            const response = await fetch('http://10.21.242.252:8089/mobile/movePallet', {   // return a json
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    palletId: 'palletValue',
                    destination: 'toLocValue',
                    // Add any other required data
                }),
            });

            const data = await response.json();
            console.log('data:', data);
            showAlertMessage(data);

        } catch (error) {
            console.log('Error: ', error);
        }
    };

    const getFakeApi = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products/1')
            const data = await response.json();
            console.log('json:', data);
            setProductData(data);
        } catch (error) {
            console.error(error);
        }
    };

    const changeLanguage = () => {
        if (i18n.language === 'en') {
            i18n.changeLanguage('kr');
        } else {
            i18n.changeLanguage('en');
        }

    };

    const [selectedValue, setSelectedValue] = useState(null);

    return (
        <View style={{ flex: 1, flexDirection: 'column', padding: 16, backgroundColor: 'red' }}>

            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#dfe3ee' }}>

            </View>

            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#dfe3ee', display: 'none' }}>
                <Image source={require('../assets/images/south-korea_rec.png')} style={{ width: 28, height: 18 }} />
                <Image source={require('../assets/images/vietnam_rec.png')} style={{ width: 28, height: 18 }} />
            </View>

            {/* Custom Radio Button */}
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#dfe3ee', display: 'none' }}>

                <View style={{ width: '60%' }}>
                    <QmRadioButton
                        options={options}
                        onPress={(value) => setSelectedValue(value)}
                    />
                </View>
                <Text>Selected value: {selectedValue}</Text>
            </View>

            {/* custom dropdown box */}
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#dfe3ee', display: 'none' }}>
                <View style={{ backgroundColor: '#8b9dc3', flexDirection: 'row', zIndex: 1 }}>
                    <QmDropdown width='40%' />
                    <QmDropdown width='50%' />
                </View>
                <Text  >55555</Text>
                <Text>2222222222222</Text>
                <QmDropdown width='60%' />
            </View>


            {/* Change language 
            npm i react-i18next
            npm i i18next
            */}
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', display: 'none' }}>
                <Text>{t('text_input')}</Text>
                <View style={{ height: 50 }}></View>
                <Pressable onPress={changeLanguage}>
                    <Text style={{}}>Change language</Text>
                </Pressable>
            </View>

            {/* Search: focus next input react native
            React Native: How to select the next TextInput after pressing the "next" keyboard button? 
            https://stackoverflow.com/questions/32748718/react-native-how-to-select-the-next-textinput-after-pressing-the-next-keyboar 
            */}
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', display: 'none' }}>
                <TextInput
                    style={{ borderWidth: 1 }}
                    placeholder="FirstTextInput"
                    returnKeyType="next"
                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    blurOnSubmit={false}
                />

                <TextInput
                    style={{ borderWidth: 1 }}
                    ref={(input) => { this.secondTextInput = input; }}
                    placeholder="secondTextInput"
                />
            </View>

            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', display: 'none' }} >
                <Pressable
                    style={[styles.btn, { backgroundColor: '#f0f0f0' }, isPressed && styles.buttonPressed]}
                    onPress={testClick}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                >
                    <Text style={styles.btnText}>Confirm</Text>
                </Pressable>
                <View style={{ height: 50 }}></View>

                <View style={{ height: 50 }}></View>
                <Pressable
                    style={[styles.btn, { width: 100 }]}
                >
                    <ActivityIndicator />
                </Pressable>
            </View>

            <View style={{ flex: 1, display: 'none' }} >
                <Pressable onPress={handleConfirm} style={styles.btnConfirm}>
                    <Text style={styles.btnText}>Confirm</Text>
                </Pressable>
            </View>

            <Image source={require('../assets/images/hwaseung2.jpg')} style={{ width: 200, height: 100, display: 'none' }} />

            {/* Modal */}
            <View style={[styles.centeredView, { display: 'none' }]}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        console.log('Modal has been closed. ');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable>
            </View>

            {/* Linear Gradient */}
            <View style={{ flex: 1, display: 'none' }}>
                {/* Props */}
                <LinearGradient
                    start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                    locations={[0, 0.5, 0.6]}
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={styles.linearGradient}>
                    <Text style={styles.buttonText}>
                        Sign in with Facebook
                    </Text>
                </LinearGradient>

                {/* Horizontal gradient */}
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>
                        Sign in with Facebook
                    </Text>
                </LinearGradient>

                {/* Simple */}
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>
                        Sign in with Facebook
                    </Text>
                </LinearGradient>

                <LinearGradient
                    colors={['#ff5722', '#ff9800']} // Array of colors
                    start={{ x: 0, y: 0 }} // Starting point of the gradient
                    end={{ x: 1, y: 0 }} // Ending point of the gradient
                >
                    <View style={styles.content}>
                        <Text>This text has a linear gradient background!</Text>
                    </View>
                </LinearGradient>
            </View>

            <Pressable style={[{ display: 'none', backgroundColor: '#f49e95' }]} onPress={() => navigation.navigate('ScanResult', {
                itemId: 86,
                otherParam: 'anything you want here',
                test: 3
            })}>
                <Text style={styles.btnText}>Go to Test Screen</Text>
            </Pressable>

            {/* #1 */}
            <View style={[{ display: 'none' }]}>
                {productData ? (
                    <View>
                        <Text>Title: {productData.title}</Text>
                        <Text>Brand: {productData.brand}</Text>
                        <Text>Description: {productData.description}</Text>
                        <Image source={{ uri: productData.thumbnail }} style={{ width: 200, height: 200 }} />
                    </View>
                ) : (
                    <Text>Loading data...</Text>
                )}
            </View>

            {/* #2 */}
            <View style={[{ display: 'none' }]}>
                <Text>Title: {productData?.title || 'Loading title...'}</Text>
                <Text>Brand: {productData?.brand || 'Loading brand...'}</Text>
                <Text>Description: {productData?.description || 'Loading description...'}</Text>
                <Image
                    source={{ uri: productData?.thumbnail || 'https://your-default-image.jpg' }}
                    style={{ width: 200, height: 200 }}
                />
            </View>

            <View style={[styles.searchSection, { display: 'none' }]}>
                <TextInput
                    style={styles.testInput}
                    placeholder="User Nickname"
                />
                <Icon style={styles.testIcon} name="search" size={20} color="#000" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonPressed: {
        backgroundColor: 'red',
    },
    btn: {
        borderRadius: 6,
        justifyContent: 'center',
        width: '50%',
        height: 48,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 5,
        shadowOpacity: 0.2,
        elevation: 4,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    linearGradient: {
        width: '80%',
        height: '7%',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    btnConfirm: {
        width: '80%',
        backgroundColor: 'orange',
    },
    btnText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    searchSection: {
        width: '80%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        borderBottomWidth: 1,
    },
    testIcon: {
        padding: 5,
    },
    testInput: {
        width: '30%',
        // flexWrap: 'wrap',
    },
});

export default TestScreen