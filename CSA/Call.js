import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import Communications from 'react-native-communications';

const ContactPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    
    const handleCallPress = () => {
        if (phoneNumber) {
            Communications.phonecall(phoneNumber, true);
        }
    };

    return (
        <ImageBackground
            source={{
                uri:
                    'https://img.freepik.com/premium-photo/orange-yellow-watercolor-paper_851755-81.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais',
            }}
            style={styles.container}
        >
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>Contact Us</Text>
                    <TextInput
                        style={styles.phoneNumberInput}
                        placeholder="Enter Phone Number"
                        keyboardType="phone-pad"
                        onChangeText={text => setPhoneNumber(text)}
                        value={phoneNumber}
                    />
                    <Button title="Call Now" onPress={handleCallPress} color={'orange'} />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: 'yellow',
    },
    phoneNumberInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
    },
});

export default ContactPage;
