import React from 'react';
import { View, Button, Linking, StyleSheet } from 'react-native';

const EmailPage = () => {
  const handleEmail = () => {
    Linking.openURL('mailto:support@example.com');
  };

  return (
    <View style={styles.container}>
      <Button title="Send Email" onPress={handleEmail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EmailPage;
