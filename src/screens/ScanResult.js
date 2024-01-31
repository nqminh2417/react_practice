import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const ScanResult = ({ route }) => {
    const { barcodeValue } = route.params; // Access passed parameter
    React.useEffect(() => {
        // Utilize barcodeValue here
    }, [barcodeValue]);
    return (
        <View>
            <Text>Scanned Barcode:</Text>
            <Text>{barcodeValue}</Text>
            {/* ... (other UI elements) */}
        </View>
    );
}

export default ScanResult