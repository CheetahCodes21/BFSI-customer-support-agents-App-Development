// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './Login';
import ContactPage from './Call';
import CommunicationServices from './Comms';
import EmailPage from './EmailPage';


const Stack = createStackNavigator();

const AppNavigator = () => {
  const handleLogin = (navigation) => {
    // Handle the navigation to the "Home" screen after successful login
    navigation.navigate('Communication');
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login">
        {({ navigation }) => <LoginPage onLogin={() => handleLogin(navigation)} />}
      </Stack.Screen>
      <Stack.Screen name="Contact" component={ContactPage} />
      <Stack.Screen name="Communication" component={CommunicationServices} />
      <Stack.Screen name="Email" component={EmailPage} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
