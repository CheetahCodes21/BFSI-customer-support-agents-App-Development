import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './screens/Login';
import ContactPage from './screens/Call';
import Home from './screens/Home';
import CommunicationServices from './screens/Comms';
import EmailPage from './screens/EmailPage';
import Chat from './components/chat';
import Status from './screens/Status';

import {
  COLORS,
  // FONT,
  SIZES,
  icons,
  images,
} from './constants';
import ScreenHeaderBtn from './components/screen-header-btn';
import PhoneScreen from '././screens/PhoneScreen';
import Analtyics from './screens/Analytics'
import Onboarding from './components/onboarding';
import ChatList from './screens/chat-list';
const Stack = createStackNavigator();

const AppNavigator = () => {
  const handleLogin = (navigation) => {
    navigation.navigate('Home');
  };
  const LoginPageComponent = ({ navigation }) => (
    <LoginPage onLogin={() => handleLogin(navigation)} />
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
      name="ScreenName"
      options={{
        headerStyle: {
          backgroundColor: COLORS.lightWhite,
        },
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
        ),
        headerRight: () => (
          <ScreenHeaderBtn iconUrl={{ uri: 'https://play-lh.googleusercontent.com/3gmcK68HCn52542XkzzQ3Y7h7SLR2lQEeFnsxWz7shTBcza24X8OmytnAK25jtrJCQ' }} dimension="90%" />
        ),
        headerTitle: "",
      }}
       component={LoginPageComponent} // Use the defined component here
      />

      <Stack.Screen name="Contact" component={ContactPage} />
      <Stack.Screen name="Home" options={{ headerShadowVisible: false,headerTitle: "",headerShown:false}} component={Home} />
      <Stack.Screen name="Communication" component={CommunicationServices} />
      <Stack.Screen name="Email" component={EmailPage} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="PhoneScreen" component={PhoneScreen} />
      <Stack.Screen name="Analtyics" component={Analtyics} />
      <Stack.Screen name="Status" component={Status} />
      <Stack.Screen name="ChatList" component={ChatList} />

    </Stack.Navigator>
  );
};

export default AppNavigator;
