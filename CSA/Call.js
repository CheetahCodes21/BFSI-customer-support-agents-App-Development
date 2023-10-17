import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import Communications from 'react-native-communications';

const ContactPage = () => {
    const phoneNumber = '+91 9481447196'; // Replace with your actual phone number

    const handleCallPress = () => {
        Communications.phonecall(phoneNumber, true);
    };

    return (
        <ImageBackground
            source={{ uri: 'https://img.freepik.com/premium-photo/orange-yellow-watercolor-paper_851755-81.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais' }}
            style={styles.container}
        >
            <View style={styles.content}>
                <View>
                <Text style={styles.title}>Contact Us</Text>
                <Text style={styles.phoneNumber}>Phone: {phoneNumber}</Text>
                <Button title="Call Now"
                 onPress={handleCallPress}
                 color={'orange'} />
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
        borderRadius:10,
    },
    cont:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-evenly',

    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color:"yellow"
    },
    phoneNumber: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default ContactPage;
