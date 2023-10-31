import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const LoginScreenComponent = ({ navigation }) => {
    const handleButtonPress = () => {
        // Perform an action when the button is pressed
        console.log('Button pressed!');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Example Screen</Text>
            <TouchableOpacity onPress={handleButtonPress} style={{ padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Press Me</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreenComponent;
