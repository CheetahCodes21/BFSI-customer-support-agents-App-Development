import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity,ImageBackground, DrawerLayoutAndroid,Image, FlatList, SafeAreaView, ScrollView } from 'react-native'
import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';
import {
    PieChart
} from 'react-native-chart-kit';
import {
    StyleSheet
} from "react-native";

import {
    COLORS,
    SIZES
} from '../constants';

import {
    createStackNavigator
} from '@react-navigation/stack';
import CallHistory from '../components/call-history';

const calls = [{
    token:1,
    id: "call",
    callerName: 'John',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Incoming',
},
{
    token:2,
    id: "chat",
    callerName: 'Doe',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Outgoing',
},
{
    token:3,
    id: "call",
    callerName: 'Mathew',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Incoming',
},
{
    token:4,
    id: "chat",
    callerName: 'Morris',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Outgoing',
},
{
    token:5,
    id: "email",
    callerName: 'Rohit',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Incoming',
},
{
    token:6,
    id: "call",
    callerName: 'Virat',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Outgoing',
},
{
    token:7,
    id: "email",
    callerName: 'Malinga',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Incoming',
},
{
    token:8,
    id: "chat",
    callerName: 'Sangakara',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Outgoing',
},
{
    token:9,
    id: "call",
    callerName: 'Shilesh',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Incoming',
},
{
    token:10,
    id: "email",
    callerName: 'Supriya',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Outgoing',
},
{
    token:11,
    id: "chat",
    callerName: 'Misty',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Incoming',
},
{
    token:12,
    id: "call",
    callerName: 'Ash',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Outgoing',
}];
const chartData = [{
    name: 'Chat',
    value: 22,
    color: '#add8e6'
},
{
    name: 'Call',
    value: 45,
    color: '#ffaddb'
},
{
    name: 'Mail',
    value: 34,
    color: '#ffdacb'
}
];

const Stack = createStackNavigator();
export default function Home({ navigation }) {

    const [showMenu, setShowMenu] = useState(false); // State to toggle the side drawer
    
    // const details = [
    //     { title: 'Communication services', link: 'Communication' },
    //     { title: 'Communication History', link: 'PhoneScreen' },
    //     { title: 'Analytics', link: 'Analtyics' },
    //     {title:"Status", link:"Status"}
    //   ];
    const toggleMenu = () => {
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
                uri:
                  'https://img.freepik.com/premium-vector/abstract-watercolor-background_71674-1277.jpg',
              }}
              style={styles.background}
          
            >
        <View style={styles.sideMenu}>
        <View style={styles.iconGroup}>
            <MaterialCommunityIcons style={styles.icon} name="home"  size={30} color="black" onPress={() => {
        
        navigation.navigate('Home');
    }} />
            <MaterialCommunityIcons style={styles.icon} name="phone" size={30} color="black" onPress={() => {
        
        navigation.navigate('Contact');
    }} />
            <MaterialCommunityIcons style={styles.icon} name="chat" size={30} color="black" onPress={() => {
        
        navigation.navigate('Communication');
    }} />
            <MaterialCommunityIcons  style={styles.icon} name="email" size={30} color="black" />
        </View>
        <View style={styles.iconGroup}>
            <MaterialCommunityIcons style={styles.icon} name="cog" size={30} color="black"  onPress={() => {
        
        navigation.navigate('Status');
    }} />
            <MaterialCommunityIcons style={styles.icon} name="logout" size={30} color="black"  onPress={() => {
        navigation.navigate('Logout');
    }} />
        </View>
    </View>
        </ImageBackground>
    );
    // const [activeJobType, setActiveJobType] = useState("Full-time");
    return (
        <ImageBackground
        source={{
            uri:'https://img.freepik.com/premium-vector/abstract-watercolor-background_71674-1277.jpg',
        }}
        style={styles.background}
    >
        <DrawerLayoutAndroid
            ref={(ref) => (drawerRef = ref)}
            drawerWidth={100}
            drawerPosition="right"
            style={{backgroundColor:"transparent"}}
            renderNavigationView={() => drawer}
        >
        <SafeAreaView style={
            {
                flex: 1,
                // backgroundColor: COLORS.lightWhite,
                display: "flex",
                flexDirection: "column"
            }
        } >
            <ScrollView style={{ flex: 1 }}>
                <View>
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
              
                <View style={styles.chartContainer}>
                    <View style={styles.shadowBox}>
                        <Text style={styles.greenborder}>All Interaction</Text>
                    </View>
                    <PieChart
                        data={chartData}
                        width={300}
                        height={200}
                        chartConfig={{
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        }}
                        accessor="value"
                        backgroundColor="transparent"
                        paddingLeft="50"
                    />
                     
                </View>
                {/* <DetailsPage navigation={navigation} /> */}
                <CallHistory calls={calls} />
                </View>
            </ScrollView>
        </SafeAreaView>
        </DrawerLayoutAndroid>
        </ImageBackground>
    )
}
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
        
    },
    chartContainer: {
        backgroundColor: 'rgba(120,0,120,0.3)',
        // borderRadius: 10,
        margin: 25,
        elevation: 2, // Android shadow elevation
        // shadowColor: 'black', 
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.3, 
        // shadowRadius: 4, 
        height:300
    },
    shadowBox: {
        // borderRadius: 10,
        overflow: 'hidden',
    },
    greenborder:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(128, 0, 128,1)',
        maxWidth: 1220,
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 40,
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        margin: 15,
        // textAlign:'center',
        textAlign:'left'
        // marginTop:125
    },
    container: {
        width: "100%",
    },
    userName: {
        fontSize: SIZES.large,
        color: COLORS.secondary,
    },
    welcomeMessage: {
       
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        marginTop: 2,
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: SIZES.large,
        height: 50,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginRight: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
        height: "100%",
    },
    searchInput: {
       
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,
    },
    searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    searchBtnImage: {
        width: "50%",
        height: "50%",
        tintColor: COLORS.white,
    },
    // tabsContainer: {
    //     width: "100%",
    //     marginTop: SIZES.medium,
    // },
    // tab: (activeJobType, item) => ({
    //     paddingVertical: SIZES.small / 2,
    //     paddingHorizontal: SIZES.small,
    //     borderRadius: SIZES.medium,
    //     borderWidth: 1,
    //     borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    // }),
    // tabText: (activeJobType, item) => ({
    //     color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    // }),
    chartDataContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        marginLeft: 10,
    },
    chartDataItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        marginBottom: 5,
    },
    chartDataText: {
        fontSize: 14,
        color: 'black',
        marginRight: 5,
        fontWeight:'bold'
    },
});