// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './Login';
import ContactPage from './Call';
import Home from './Home';
import CommunicationServices from './Comms';

import {
  COLORS,
  FONT,
  SIZES,
  icons,
  images,
} from './constants';
import ScreenHeaderBtn from './components/screen-header-btn';
const Stack = createStackNavigator();

const AppNavigator = () => {
  const handleLogin = (navigation) => {
    // Handle the navigation to the "Home" screen after successful login
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
          <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
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
      {/* <Stack.Screen name="Login">
        {({ navigation }) => <LoginPage onLogin={() => handleLogin(navigation)} />}
      </Stack.Screen> */}
      <Stack.Screen name="Contact" component={ContactPage} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Communication" component={CommunicationServices} />
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