// AppNavigator.js
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './screens/Login';
import ContactPage from './screens/Call';
import Home from './screens/Home';
import CommunicationServices from './screens/Comms';
import EmailPage from './screens/EmailPage';
import Status from './screens/Status';

import {
  COLORS,
  FONT,
  SIZES,
  icons,
  images,
} from './constants';
import ScreenHeaderBtn from './components/screen-header-btn';
import PhoneScreen from './PhoneScreen';
import Analtyics from './screens/Analytics'
import Onboarding from './components/onboarding';
const Stack = createStackNavigator();

const AppNavigator = () => {
  const handleLogin = (navigation) => {
    navigation.navigate('Home');
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
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
      name="ScreenName"
      component = {
          ({
            navigation
          }) => < LoginPage onLogin = {
            () => handleLogin(navigation)
          }
          />}
    />

      <Stack.Screen name="Contact" component={ContactPage} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Communication" component={CommunicationServices} />
      <Stack.Screen name="Email" component={EmailPage} />
      <Stack.Screen name="PhoneScreen" component={PhoneScreen} />
      <Stack.Screen name="Analtyics" component={Analtyics} />
      <Stack.Screen name="Status" component={Status} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

        // < Stack.Navigator >
        //   <
        //   Stack.Screen
        // options = {
        //   {
        //     headerStyle: {
        //       backgroundColor: COLORS.lightWhite,
        //     },
        //     headerShadowVisible: false,
        //     headerLeft: () => ( <
        //       ScreenHeaderBtn iconUrl = {
        //         icons.menu
        //       }
        //       dimension = "60%" / >
        //     ),
        //     headerRight: () => ( <
        //       ScreenHeaderBtn iconUrl = {
        //         images.profile
        //       }
        //       dimension = "100%" / >
        //     ),
        //     headerTitle: "",
        //   }
        // }
        // name = "ScreenName"
        // component = {
        //   YourComponent
        // }
        // /> <
        // /Stack.Navigator>