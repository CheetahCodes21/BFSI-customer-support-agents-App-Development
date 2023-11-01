import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

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
    <ImageBackground
      source={{
        uri:
          'https://img.freepik.com/premium-vector/abstract-watercolor-background_71674-1277.jpg',
      }}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.header}>Select Status</Text>
        <View style={styles.statusList}>
          {statuses.map((status) => (
            <TouchableOpacity
              key={status}
              onPress={() => handleStatusSelection(status)}
              style={[
                styles.statusItem,
                { borderColor: selectedStatus === status ? 'purple' : 'transparent' },
              ]}
            >
              <Text
                style={{
                  color: selectedStatus === status ? 'purple' : 'black',
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '99%',
    height: '99%',
    alignItems: 'center',
    justifyContent: 'center',
    bordergroundColor:"purple",
    borderRadius: 5,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: 'purple',
  },
  statusList: {
    width: '80%',
    borderRadius: 5,
    bordergroundColor:"purple",
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
    backgroundColor: 'purple',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Status;
