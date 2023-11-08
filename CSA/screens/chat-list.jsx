import React, { useState } from 'react';
import { SafeAreaView, FlatList, Text, TouchableOpacity, View, ImageBackground, StyleSheet, Image } from 'react-native';

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
            <FlatList
                data={chatHistory}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={handleChatPress} style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc', backgroundColor: 'white' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.sender}</Text>
                            <Text style={{ color: 'purple', marginLeft: 10 }}>{item.time}</Text>
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
        justifyContent: 'left',
        alignItems: 'left',
    }});
export default ChatList;
