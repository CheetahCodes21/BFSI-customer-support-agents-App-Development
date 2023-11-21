import React, { useState } from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerLayoutAndroid } from 'react-native-gesture-handler'; // Import DrawerLayoutAndroid or relevant component

import { COLORS } from '../constants';

const CustomDrawerLayout = ({ navigation }) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = (drawerRef) => {
        setShowMenu(!showMenu);
        if (drawerRef) {
            if (showMenu) {
                drawerRef.closeDrawer();
            } else {
                drawerRef.openDrawer();
            }
        }
    };

    let drawerRef = null;

    const drawer = (
        <ImageBackground
            source={{
                uri: 'https://img.freepik.com/premium-vector/abstract-watercolor-background_71674-1277.jpg',
            }}
            style={{
                flex: 1,
                backgroundColor: COLORS.lightWhite,
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingHorizontal: 20,
            }}
        >
            <View style={styles.header}>
                    {/* Left Icon */}
                    {/* <View style={styles.logo} /> */}
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={{ uri: 'https://play-lh.googleusercontent.com/3gmcK68HCn52542XkzzQ3Y7h7SLR2lQEeFnsxWz7shTBcza24X8OmytnAK25jtrJCQ' }}
                        />
                    </View>

                    {/* Title */}
                    <Text style={styles.title}>Tetherfi</Text>

                    {/* Hamburger Icon */}
                    <TouchableOpacity style={styles.rightIcon} onPress={toggleMenu}>
                        <Ionicons name="menu" size={38}  color="black" />
                    </TouchableOpacity>
                </View>
            <View style={{ width: '100%', alignItems: 'center' }}>
                {/* Your drawer icons here */}
                <MaterialCommunityIcons
                    name="home"
                    size={30}
                    color="black"
                    onPress={() => navigation.navigate('Home')}
                />
                <MaterialCommunityIcons
                    name="phone"
                    size={30}
                    color="black"
                    onPress={() => navigation.navigate('PhoneScreen')}
                />
                {/* Add more icons */}
            </View>
        </ImageBackground>
    );

    return (
        <DrawerLayoutAndroid
            ref={(ref) => (drawerRef = ref)}
            drawerWidth={100}
            drawerPosition="right"
            style={{ backgroundColor: 'transparent' }}
            renderNavigationView={() => drawer}
        />
    );
    
};
const styles = StyleSheet.create({
    sideMenu: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
       
    },
    iconGroup: {
        // flexDirection: 'column',
        // justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    icon: {
        marginVertical: 40, // Adjust space between icons
    },
  
    title:{
      fontWeight:'bold',
      fontSize:25,
      marginTop:35,
      color:'purple'
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    // sideDrawer:{
    //     position: 'absolute',
    //     top: 0,
    //     bottom: 0,
        
    //     backgroundColor: COLORS.green,
    //     zIndex: 1, // Ensure it stays on top of other content
        
    // },
    logoContainer: {
        alignItems: 'center',
        marginTop: 40,
        marginLeft:5
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 40, 
        
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 22,
        paddingVertical: 20,
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
        // height:100,
    },
    rightIcon: {
        borderRadius: 50,
        padding: 8,
        marginTop:40
        
    },})

export default CustomDrawerLayout;
