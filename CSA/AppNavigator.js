// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './Login';
import ContactPage from './Call';


const Stack = createStackNavigator();

const AppNavigator = () => {
  const handleLogin = (navigation) => {
    // Handle the navigation to the "Home" screen after successful login
    navigation.navigate('Contact');
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login">
        {({ navigation }) => <LoginPage onLogin={() => handleLogin(navigation)} />}
      </Stack.Screen>
      <Stack.Screen name="Contact" component={ContactPage} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
