import React from 'react';
import { View, Button, Linking, ImageBackground, StyleSheet, Image } from 'react-native';
import Logo from '../assets/images/Logo.png'

const EmailPage = () => {
  const handleEmail = () => {
    Linking.openURL('mailto:support@example.com');
  };

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
      <Button title="Send Email" color={'purple'} onPress={handleEmail} />
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
  logo: {
    width: 200, // Set the desired width
    height: 100, // Set the desired height
    marginBottom: 100, // Adjust the spacing as needed
    resizeMode: 'contain', // Use 'contain' to fit the image properly without cropping
    alignSelf: 'center', // Center the image horizontally
},
});

export default EmailPage;
