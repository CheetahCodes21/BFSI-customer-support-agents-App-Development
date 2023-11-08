import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native';
import Logo from '../assets/images/Logo.png';

const CommunicationServices  = ({ navigation }) => {

  return (
    <ImageBackground
            source={{
                uri:
                    'https://img.freepik.com/premium-vector/abstract-watercolor-background_71674-1277.jpg',
            }}
            style={styles.container}
        >
    <View style={styles.container}>
    <Image source={Logo} style={styles.logo} />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Choose your channel</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("ChatList")} style={[styles.button, { width: 200 }]}>
          <Text style={styles.buttonText}>🗨 Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Email")} style={[styles.button, { width: 200 }]}>
          <Text style={styles.buttonText}>📧 Email</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Contact")} style={[styles.button, { width: 200 }]}>
          <Text style={styles.buttonText}>📞 Call</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headingContainer: {
    paddingTop: 50,
  },
  heading: {
    color: 'purple',
    fontSize: 24,
    textAlign: 'center',
  },
  buttonsContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  logo: {
    width: 200, // Set the desired width
    height: 100, // Set the desired height
    marginBottom: 100, // Adjust the spacing as needed
    resizeMode: 'contain', // Use 'contain' to fit the image properly without cropping
    alignSelf: 'center', // Center the image horizontally
},
});

export default CommunicationServices;
