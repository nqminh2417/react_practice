/* eslint-disable prettier/prettier */

import { Camera, useCameraDevice, useCameraDevices, useCameraPermission, useCodeScanner } from 'react-native-vision-camera'
import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const ScanScreen = ({ navigation }) => {

    const device = useCameraDevice('back');
    const [hasPermission, setHasPermission] = useState(false);
    const [barcodeValue, setBarcodeValue] = useState('');

    useEffect(() => {
        const checkPermission = async () => {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                // ... permission request options
            );
            setHasPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
        };

        checkPermission();
    }, []);

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
            console.log(`Scanned: ${codes[0].value}`);
            setBarcodeValue(codes[0].value);
        }
    });

    return (
        hasPermission && (
            <View style={{ flex: 1 }}>
                <Camera
                    style={{ flex: 1 }}
                    device={device}
                    isActive={true}
                    codeScanner={codeScanner}
                />
                <Text style={{ textAlign: 'center', marginTop: 20 }}>
                    {barcodeValue}
                </Text>
            </View>
        )
    );
    //-----------------

    // const { hasPermission, requestPermission } = useCameraPermission();
    // const device = useCameraDevice('back');
    // console.log(hasPermission);

    // const codeScanner = useCodeScanner({
    //     codeTypes: ['qr', 'ean-13'],
    //     onCodeScanned: (codes) => {
    //         console.log(`Scanned: ${codes[0].value}`)
    //     }
    // });

    // React.useEffect(() => {
    //     requestPermission();
    // }, []);
    // if (device == null) {
    //     return (
    //         <View>
    //             <Text>Device not found</Text>
    //         </View>
    //     );
    // }
    // return (
    //     <Camera
    //         style={StyleSheet.absoluteFill}
    //         device={device}
    //         isActive={true}
    //         codeScanner={codeScanner}
    //     />
    // );
};

export default ScanScreen;
