import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground,Image } from 'react-native';
import Logo from '../assets/images/Logo.png';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    // No need to fetch user data here. You only need to fetch it when logging in.
  }, []);

  const handleLogin = () => {
    // Create a request body with the email and password
    const requestBody = {
      email: username,
      password: password,
    };

    fetch('http://restapi.adequateshop.com/api/authaccount/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Invalid username or password');
        }
      })
      .then((data) => {
        // Store the token from the API response
        const token = data.data.Token;

        setToken(token); // Store the token in your component state
        onLogin(); // Call the callback function to handle navigation
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        setLoginError('Invalid username or password. Please try again.');
      });
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
        <Image source={Logo} style={styles.logo}/>
        <Text style={styles.title}>Login Page</Text>
        <TextInput
          style={styles.input}
          placeholder="Lan ID"
          placeholderTextColor="purple"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Station ID"
          placeholderTextColor="purple"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button 
        title="Login" 
        onPress={handleLogin}
        color={'purple'}
        />
        <Text style={styles.errorText}>{loginError}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'purple',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'purple',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    color: 'purple',
  },
  loginButton: {
    backgroundColor: 'purple',
    width: 200, // Set the desired width
    borderRadius: 20, // Adjust the borderRadius to make the button rounded
  },
  errorText: {
    color: 'red',
  },
  logo: {
    width: 200, // Set the desired width
    height: 100, // Set the desired height
    marginBottom: 100, // Adjust the spacing as needed
    resizeMode: 'contain', // Use 'contain' to fit the image properly without cropping
    alignSelf: 'center', // Center the image horizontally
  },
  
});

export default LoginPage;
