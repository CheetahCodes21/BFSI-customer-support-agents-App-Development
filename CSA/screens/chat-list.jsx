import React, { useState } from 'react';
import { SafeAreaView, FlatList, Text, TouchableOpacity, View } from 'react-native';

const ChatList = ({ navigation }) => {
    const [chatHistory, setChatHistory] = useState([
        { id: 1, sender: 'John', message: 'Hello!', time: '10:00 AM' },
        { id: 2, sender: 'Jane', message: 'Hi there!', time: '10:05 AM' },
    ]);

    const handleChatPress = () => {
        navigation.navigate('Chat');
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
            <FlatList
                data={chatHistory}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={handleChatPress} style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc', backgroundColor: 'white' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.sender}</Text>
                            <Text style={{ color: '#777', marginLeft: 10 }}>{item.time}</Text>
                        </View>
                        <Text>{item.message}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
};

export default ChatList;
