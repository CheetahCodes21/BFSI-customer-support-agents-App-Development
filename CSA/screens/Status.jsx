import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const statuses = [
  'Paid Break',
  'TM feedback',
  'Fulfillment',
  'Meeting/Training',
  'Computer Problem',
  'TPIN2',
  'Call Outbound',
  'Logout',
  'Callback',
];

function Status({ navigation }) {
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusSelection = (status) => {
    setSelectedStatus(status);
  };

  const handleConfirmStatus = () => {
    if (selectedStatus) {
      // You can perform an action here with the selected status.
      console.log(`Selected status: ${selectedStatus}`);
      // Navigate back to the previous screen.
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Status</Text>
      <View style={styles.statusList}>
        {statuses.map((status) => (
          <TouchableOpacity
            key={status}
            onPress={() => handleStatusSelection(status)}
            style={[
              styles.statusItem,
              { borderColor: selectedStatus === status ? 'blue' : 'transparent' },
            ]}
          >
            <Text
              style={{
                color: selectedStatus === status ? 'blue' : 'black',
              }}
            >
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        onPress={handleConfirmStatus}
        style={styles.button}
        disabled={!selectedStatus}
      >
        <Text style={styles.buttonText}>Set Status</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  statusList: {
    width: '100%',
  },
  statusItem: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Status;
