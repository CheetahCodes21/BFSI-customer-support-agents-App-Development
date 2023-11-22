import React from 'react';
import { View, Text, Button, Image, TouchableOpacity,ImageBackground, StyleSheet } from 'react-native';
import LogoutImg from '../assets/images/logout.png'

const LogoutPage = ({ navigation }) => {
  // Function to handle logout
  const handleLogout = () => {
    // Perform any necessary logout actions here
    // Example: Clear authentication state, remove tokens, etc.

    // Navigate to the login screen or initial screen after logout
    navigation.navigate('ScreenName');
  };

  // Function to handle cancel button press
  const handleCancel = () => {
    // Navigate back to the previous screen or perform any other desired action
    navigation.goBack();
  };

  return (
    <ImageBackground
    source={{
        uri:'https://img.freepik.com/premium-vector/abstract-watercolor-background_71674-1277.jpg',
    }}
    style={styles.background}
>
    <View style={styles.container}>
      {/* Profile photo */}
      <Image
        style={styles.profilePhoto}
        source={LogoutImg} 
      />

      {/* Logout title */}
      <Text style={styles.title}>Confirm Logout</Text>
      <Text style={styles.bodytext}>Are you sure you want to Logout?</Text>
      {/* Confirm and Cancel buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
  style={{
    backgroundColor: 'green',
    borderRadius: 8, 
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10, 
  }}
  onPress={handleLogout}
>
  <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
    Logout
  </Text>
</TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bodytext:{
   marginBottom:20
  },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:'white',
    margin:45,
    marginTop:184,
    marginBottom:184,
    borderRadius:15
  },
  profilePhoto: {
    // width: 100,
    // height: 100,
    // borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
  },
  cancelButton: {
    backgroundColor: 'red',
    borderRadius: 8, 
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10, 
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default LogoutPage;
