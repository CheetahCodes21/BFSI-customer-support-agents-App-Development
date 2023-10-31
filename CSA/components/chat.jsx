import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, FlatList, Text, TouchableOpacity, Alert } from 'react-native';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hello!', from: 'user' },
        { id: 2, text: 'Hi there!', from: 'other' },
        { id: 3, text: 'How are you?', from: 'user' },
        { id: 4, text: 'I am good. How about you?', from: 'other' },
    ]);

    const sendMessage = () => {
        if (message.trim() !== '') {
            setMessages([...messages, { id: messages.length + 1, text: message, from: 'user' }]);
            setMessage('');
        }
    };

    const handleLongPress = (item) => {
        Alert.alert(
            'Message Options',
            'Choose an option',
            [
                {
                    text: 'Delete',
                    onPress: () => deleteMessage(item.id),
                },
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
            ],
        );
    };

    const deleteMessage = (id) => {
        setMessages(messages.filter((message) => message.id !== id));
    };

    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onLongPress={() => handleLongPress(item)}>
                        <View style={{ alignSelf: item.from === 'user' ? 'flex-end' : 'flex-start', marginVertical: 5 }}>
                            <Text
                                style={{
                                    backgroundColor: item.from === 'user' ? '#4caf50' : '#e0e0e0',
                                    padding: 10,
                                    borderRadius: 8,
                                    color: item.from === 'user' ? 'white' : 'black',
                                }}
                            >
                                {item.text}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                <TextInput
                    style={{ flex: 1, borderWidth: 1, borderRadius: 5, padding: 8 }}
                    placeholder="Type a message..."
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                />
                <Button title="Send" onPress={sendMessage} />
            </View>
        </SafeAreaView>
    );
};

export default Chat;
