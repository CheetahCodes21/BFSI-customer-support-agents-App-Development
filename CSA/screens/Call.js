import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Image } from 'react-native';
import Communications from 'react-native-communications';
import Logo from '../assets/images/Logo.png';

const ContactPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [comment, setComment] = useState(''); // New state for comment

    const handleCallPress = () => {
        if (phoneNumber) {
            Communications.phonecall(phoneNumber, true);
        }
    };

    return (
        <ImageBackground
            source={{
                uri:
                    'https://img.freepik.com/premium-vector/abstract-watercolor-background_71674-1277.jpg',
            }}
            style={styles.container}
        >
            <View style={styles.content}>
                <Image source={Logo} style={styles.logo} />
                <View>
                    <Text style={styles.title}>Call </Text>
                    <TextInput
                        style={styles.phoneNumberInput}
                        placeholder="Enter Phone Number"
                        keyboardType="phone-pad"
                        placeholderTextColor={"purple"}
                        onChangeText={text => setPhoneNumber(text)}
                        value={phoneNumber}
                    />

                    {/* Text area for comment */}
                    <TextInput
                        style={styles.commentInput}
                        placeholder="Call purpose"
                        placeholderTextColor={"purple"}
                        multiline
                        numberOfLines={6}
                        onChangeText={text => setComment(text)}
                        value={comment}
                    />

                    <Button title="Call Now" onPress={handleCallPress} color={'purple'} />
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
        width: "100%",
        height: "60%",
        alignContent: "center",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: 'purple',
    },
    phoneNumberInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
        color: "purple",
    },
    commentInput: {
        height: 100, // Adjust the height as needed
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
        color: "purple",
    },
    logo: {
        width: 200, // Set the desired width
        height: 100, // Set the desired height
        marginBottom: 100, // Adjust the spacing as needed
        resizeMode: 'contain', // Use 'contain' to fit the image properly without cropping
        alignSelf: 'center', // Center the image horizontally
    },
});

export default ContactPage;
