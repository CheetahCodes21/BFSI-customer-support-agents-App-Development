import React,{useState} from 'react'
import { Text,View,TextInput,TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native'
const jobTypes = ["Past day", "Past Month", "Past year"];
import {
    StyleSheet
} from "react-native";

import {
    COLORS,
    FONT,
    SIZES
} from './constants';

import {
    createStackNavigator
} from '@react-navigation/stack';
import DetailsPage from './components/cards';

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
    // Add more title-detail pairs as needed
];

const Stack = createStackNavigator();

export default function Home() {
      const [activeJobType, setActiveJobType] = useState("Full-time");
  return (
      <SafeAreaView style = {
          {
              flex: 1,
              backgroundColor: COLORS.lightWhite
          }
      } >

          <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Tejas</Text>
        <Text style={styles.welcomeMessage}></Text>
      </View>

      {/* <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            // value={searchTerm}
            // onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View> */}

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
    <DetailsPage/>
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

