import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

const ChatList = ({ navigation }) => {
  const [chatHistory, setChatHistory] = useState([
    { id: 1, sender: 'John', message: 'Hello!', time: '10:00 AM' },
    { id: 2, sender: 'Jane', message: 'Hi there!', time: '10:05 AM' },
  ]);

  const handleChatPress = () => {
    navigation.navigate('Chat');
  };

  return (
    <ImageBackground
      source={{
        uri:
          'https://img.freepik.com/premium-vector/abstract-watercolor-background_71674-1277.jpg',
      }}
      style={styles.container}
    >
      {/* Top Box */}
      <View style={styles.topBox}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Send SMS</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        {/* Input Fields */}
        <TextInput
          style={styles.inputField}
          placeholder="Enter Number"
          keyboardType="numeric"
        />
        <View style={styles.dropdownContainer}>
          <ModalDropdown
            style={styles.dropdown}
            options={['Option 1', 'Option 2', 'Option 3']}
            defaultValue="Select Department"
            onSelect={(index, value) => {
              // Handle selection
            }}
          />
          <ModalDropdown
            style={styles.dropdown}
            options={['Group 1', 'Group 2', 'Group 3']}
            defaultValue="Select Group"
            onSelect={(index, value) => {
              // Handle selection
            }}
          />
        </View>
        <TextInput
          style={styles.messageInput}
          placeholder="Enter Message"
          multiline={true}
        />
        {/* Send Button */}
        <TouchableOpacity style={styles.sendButton}>
          <Text style={{ color: 'white' }}>Send</Text>
        </TouchableOpacity>
      </View>

      {/* Chat History */}
      <FlatList
        data={chatHistory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={handleChatPress}
            style={styles.chatItem}
          >
            <View
              style={styles.chatItemInner}
            >
              <Text style={styles.senderText}>{item.sender}</Text>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
            <Text>{item.message}</Text>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBox: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dropdown: {
    flex: 1,
    height: 40,
    marginRight: 5,
    borderWidth: 1,
  },
  messageInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  sendButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  chatItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
  },
  chatItemInner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  senderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timeText: {
    color: 'purple',
    marginLeft: 10,
  },
});

export default ChatList;
