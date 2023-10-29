import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

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

function StatusScreen({ navigation }) {
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusSelection = (status) => {
    setSelectedStatus(status);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Select Status</Text>
      {statuses.map((status) => (
        <TouchableOpacity
          key={status}
          onPress={() => handleStatusSelection(status)}
        >
          <Text
            style={{
              padding: 10,
              margin: 5,
              borderWidth: 1,
              borderColor:
                selectedStatus === status ? 'blue' : 'transparent',
            }}
          >
            {status}
          </Text>
        </TouchableOpacity>
      ))}
      <Button
        title="Confirm Status"
        onPress={() => {
          if (selectedStatus) {
            // You can perform an action here with the selected status.
            console.log(`Selected status: ${selectedStatus}`);
            // Navigate back to the previous screen.
            navigation.goBack();
          }
        }}
      />
    </View>
  );
}

export default StatusScreen;
