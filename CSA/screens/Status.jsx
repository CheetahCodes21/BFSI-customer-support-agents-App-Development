import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import ScreenHeaderBtn from '../components/screen-header-btn';

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
    <>
      <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, }}>
        <View style={{
          height: 50,
          width: 50,
          paddingLeft: 60,
        }}>
          <ScreenHeaderBtn iconUrl={{ uri: 'https://th.bing.com/th/id/OIP.8awBhAqpC1kP4SEytS24EgAAAA?rs=1&pid=ImgDetMain' }} dimension="200%" />
        </View>
        <View style={{ display: "flex", flexDirection: 'column' }}>
          <Text style={{ color: "Black", fontSize: 30, textAlign: "center", marginTop: 20, fontWeight: 'bold' }}>Varun Bhutada</Text>
          <Text style={{ color: "gray", fontSize: 20, textAlign: "center", marginTop: 10 }}>Available</Text>
          <View style={{
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 20,
          }}>
            <Text>0</Text>
            <Text>0</Text>
            <Text>:</Text>
            <Text>0</Text>
            <Text>0</Text>
            <Text>:</Text>
            <Text>0</Text>
            <Text>0</Text>
          </View>
        </View>
      </View>
      <View style={styles.overlay}>
        {/* <Text style={styles.header}>Select Status</Text> */}
        <View style={styles.statusList}>
          {statuses.map((status, index) => (
            <TouchableOpacity
              key={status}
              onPress={() => handleStatusSelection(status)}
              style={[
                styles.statusItem,
                {
                  borderColor: selectedStatus === status ? 'purple' : 'transparent',
                  display: "flex",
                  flexDirection: 'row',
                  gap: 4,
                },
              ]}
            >
              <Text>{index + 1}</Text>
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
    </>
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
    bordergroundColor: "purple",
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
    bordergroundColor: "purple",
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
