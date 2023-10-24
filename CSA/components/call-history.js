import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';


const CallHistory = ({ calls }) => {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Call History</Text>
      <FlatList
        data={calls}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.callItem}>
            <Text>{item.callerName}</Text>
            <Text>{item.timestamp}</Text>
            <Text>{item.callType}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CallHistory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    callItem: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

