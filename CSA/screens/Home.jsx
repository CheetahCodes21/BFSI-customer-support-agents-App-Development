import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, FlatList, SafeAreaView, ScrollView } from 'react-native'
import {
    PieChart
} from 'react-native-chart-kit';
const jobTypes = ["Past day", "Past Month", "Past year"];
import {
    StyleSheet
} from "react-native";

import {
    COLORS,
    FONT,
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
    name: 'Category 1',
    value: 30,
    color: '#add8e6'
},
{
    name: 'Category 2',
    value: 10,
    color: '#ffcccb'
}
];

const Stack = createStackNavigator();
export default function Home({ navigation }) {
    const [activeJobType, setActiveJobType] = useState("Full-time");
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
                <View>
                    <View style={styles.tabsContainer}>
                        <FlatList
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
                        />
                    </View>
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
                    paddingLeft="15"
                    absolute
                />
                <DetailsPage navigation={navigation} />
                <CallHistory calls={calls} />
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    userName: {
        fontFamily: FONT.regular,
        fontSize: SIZES.large,
        color: COLORS.secondary,
    },
    welcomeMessage: {
        fontFamily: FONT.bold,
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
        fontFamily: FONT.regular,
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
        fontFamily: FONT.medium,
        color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }),
});