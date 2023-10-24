import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CommunicationServices  = ({ navigation }) => {
  const handleChatPress = () => {
    // Implement chat functionality
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Choose your channel</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleChatPress} style={[styles.button, { width: 200 }]}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#001f3f', // Navy blue color
  },
  headingContainer: {
    paddingTop: 50,
  },
  heading: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
  buttonsContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
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
});

export default CommunicationServices;
