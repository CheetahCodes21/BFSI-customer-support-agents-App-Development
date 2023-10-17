import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,ImageBackground } from 'react-native';

const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  { username: 'U', password: 'P' },
  // Add more username-password pairs as needed
];

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      // Successfully logged in, call the onLogin callback
      onLogin(); // Call the callback function to handle navigation
    } else {
      // Display an error message
      setLoginError('Invalid username or password. Please try again.');
    }
  };

  return (
    <ImageBackground
    source={{ uri: 'https://w0.peakpx.com/wallpaper/843/537/HD-wallpaper-s8-borders-stars-abstract-amoled-black-blue-display-gradient-infinity-thumbnail.jpg' }}
    style={styles.container}
  >
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="white"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="white"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
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
    color:"white"
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius:10,
    color:"white"
  },
  errorText: {
    color: 'red',
  },
});

export default LoginPage;
