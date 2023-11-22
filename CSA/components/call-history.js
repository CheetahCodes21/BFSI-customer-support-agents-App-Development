import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CallHistory = ({ calls }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greenborder}>Interaction Details</Text>
      <View style={styles.tableHeader}>
      <View style={styles.gap1} />
        <Text style={[styles.columnHeader, { flex: 1 }]}>Channel</Text>
        <View style={styles.gap1} />
        <View style={styles.gap1} />
        <View style={styles.gap1} />
        <View style={styles.gap1} />
        <Text style={[styles.columnHeader, { flex: 1 }]}>Direction</Text>
        <Text style={[styles.columnHeader, { flex: 2 }]}>User</Text>
        <Text style={[styles.columnHeader, { flex: 2 }]}>Created on</Text>
      </View>
      <FlatList
        data={calls}
        keyExtractor={(item) => item.token.toString()}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
             <View style={styles.gap1} />
             <View style={styles.gap1} />
             <View style={styles.gap1} />
            {item.channel === 'call' ? (
              <MaterialCommunityIcons name="phone" size={30} color="black" style={styles.icon} />
            ) : item.channel === 'chat' ? (
              <MaterialCommunityIcons name="chat" size={30} color="black" style={styles.icon} />
            ) : (
              <MaterialCommunityIcons name="email" size={30} color="black" style={styles.icon} />
            )}
             <View style={styles.gap} />
             <View style={styles.gap1} />
            <Text style={[styles.tableCell, { flex: 1 }]}>{item.callType}</Text>
           
            <Text style={[styles.tableCell, { flex: 2 }]}>{item.callerName}</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>{item.timestamp}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  columnHeader: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  tableCell: {
    textAlign: 'center',
  },
 
  gap1: {
    width: "1%", // Adjust the width as needed
  },
  gap: {
    width: "10%", // Adjust the width as needed
  },
  icon: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  greenborder: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(128, 0, 128,1)',
    maxWidth: 1220,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 40,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 15,
    textAlign: 'left',
  },
});

export default CallHistory;
