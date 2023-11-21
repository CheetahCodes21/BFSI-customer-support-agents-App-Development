import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, FlatList, SafeAreaView, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
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
import DetailsPage from '../components/cards';
import CallHistory from '../components/call-history';
import { StatusBar } from 'expo-status-bar';

const details = [{
    title: 'Name',
    text: 'John Doe'
},
{
    title: 'Address',
    text: '123 Main St, City, Country'
},
{
    title: 'Age',
    text: '21'
},
{
    title: 'Gender',
    text: 'Male'
},
];
const calls = [{
    id: 1,
    callerName: 'John Doe',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Incoming',
},
{
    id: 2,
    callerName: 'Jane Doe',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Outgoing',
},
{
    id: 3,
    callerName: 'John Doe',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Incoming',
},
{
    id: 4,
    callerName: 'Jane Doe',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Outgoing',
},
{
    id: 5,
    callerName: 'John Doe',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Incoming',
},
{
    id: 6,
    callerName: 'Jane Doe',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Outgoing',
},
{
    id: 7,
    callerName: 'John Doe',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Incoming',
},
{
    id: 8,
    callerName: 'Jane Doe',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Outgoing',
},
{
    id: 9,
    callerName: 'John Doe',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Incoming',
},
{
    id: 10,
    callerName: 'Jane Doe',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Outgoing',
},
{
    id: 11,
    callerName: 'John Doe',
    timestamp: '2023-10-24 10:30 AM',
    callType: 'Incoming',
},
{
    id: 12,
    callerName: 'Jane Doe',
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
    color: '#ffcccb'
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

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    // const [activeJobType, setActiveJobType] = useState("Full-time");
    return (
        <SafeAreaView style={
            {
                flex: 1,
                backgroundColor: COLORS.lightWhite,
                display: "flex",
                flexDirection: "column"
            }
        } >
            <ScrollView style={{ flex: 1 }}>
                {/* <View> */}
                    {/* <View style={styles.tabsContainer}> */}
                        {/* <FlatList
                            data={jobTypes}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.tab(activeJobType, item)}
                                    onPress={() => {
                                        setActiveJobType(item);
                                    }}
                                >
                                    <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item}
                            contentContainerStyle={{ columnGap: SIZES.small }}
                            horizontal
                        /> */}
                    {/* </View> */}
                {/* </View> */}
                <View style={styles.header}>
                    {/* Left Icon */}
                    <View style={styles.logo} />

                    {/* Title */}
                    {/* <Text style={styles.title}>Your App</Text> */}

                    {/* Hamburger Icon */}
                    <TouchableOpacity style={styles.rightIcon} onPress={toggleMenu}>
                        <Ionicons name="menu" size={34} color="black" />
                    </TouchableOpacity>
                </View>
                {showMenu && (
                    <View style={styles.sideDrawer}>
                        <Text>Menu Item 1</Text>
                        <Text>Menu Item 2</Text>
                        {/* Add more menu items */}
                    </View>
                )}
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
                     {/* <View style={styles.chartDataContainer}>
                        {chartData.map((data, index) => (
                            <View key={index} style={styles.chartDataItem}>
                                <Text style={styles.chartDataText}>{`${data.name}: ${data.value}`}</Text>
                            </View>
                        ))}
                    </View> */}
                </View>
                {/* <DetailsPage navigation={navigation} /> */}
                <CallHistory calls={calls} />
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    logo: {
        width: 40,
        height: 40,
        borderRadius: 20, // Half the width and height to create a circle
        backgroundColor: 'green',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 22,
        paddingVertical: 25,
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
        height:100,
    },
    rightIcon: {
        borderRadius: 50,
        padding: 8,
    },
    chartContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 25,
        elevation: 5, // Android shadow elevation
        shadowColor: 'black', // iOS shadow color
        shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
        shadowOpacity: 0.3, // iOS shadow opacity
        shadowRadius: 4, // iOS shadow radius
        height:300
    },
    shadowBox: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    greenborder:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "darkgreen",
        maxWidth: 1220,
        borderWidth: 2,
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
    tabsContainer: {
        width: "100%",
        marginTop: SIZES.medium,
    },
    tab: (activeJobType, item) => ({
        paddingVertical: SIZES.small / 2,
        paddingHorizontal: SIZES.small,
        borderRadius: SIZES.medium,
        borderWidth: 1,
        borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }),
    tabText: (activeJobType, item) => ({
        color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }),
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