// Import necessary modules and components from React Native and custom files.
import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import Phonlog from '../api/phonlog'; // Import phone log data
import { COLORS, icons, SIZES } from '../constants'; // Import custom style constants

// Define the PhoneScreen functional component.
const PhoneScreen = () => {
  // Define state variables using the useState hook.
  const [expandedItem, setExpandedItem] = useState(null); // To manage expanded items
  const [searchTerm, setSearchTerm] = React.useState(""); // To manage search term input

  // Function to toggle the expansion of an item based on its ID.
  const toggleExpand = (id) => {
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
    }
  };

  // Function to render each item in the FlatList.
  const renderItem = ({ item }) => {
    let interactionDay = '';
    const todayIDs = [1, 2, 3];
    const yesterdayIDs = [4, 5, 6, 7];

    // Determine the interaction day based on item ID.
    if (todayIDs.includes(item.id)) {
      interactionDay = 'Today';
    } else if (yesterdayIDs.includes(item.id)) {
      interactionDay = 'Yesterday';
    }

    return (
      <TouchableOpacity onPress={() => toggleExpand(item.id)}>
        <Text style={styles.main}>{interactionDay}</Text>
        <View style={styles.item}>
          <View style={styles.row}>
            <View style={styles.leftContainer}>
              <Image source={item.img} resizeMode="contain" style={styles.logo} />
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.startTime}>{item.startTime}</Text>
            </View>
          </View>
          {expandedItem === item.id && (
            <View>
              <View style={styles.descriptionLabelContainer}>
                <Text style={styles.descriptionLabel}>Description:</Text>
                <Text style={styles.text}> {item.desc}</Text>
              </View>
              <View style={styles.descriptionLabelContainer}>
                <Text style={styles.descriptionLabel}>Phone Number: </Text>
                <Text style={styles.text}>{item.phno}</Text>
              </View>
              <View style={styles.descriptionLabelContainer}>
                <Text style={styles.descriptionLabel}>startTime: </Text>
                <Text style={styles.text}>{item.startTime}</Text>
              </View>
              <View style={styles.descriptionLabelContainer}>
                <Text style={styles.descriptionLabel}>End Time: </Text>
                <Text style={styles.text}>{item.endTime}</Text>
              </View>
              <View style={styles.descriptionLabelContainer}>
                <Text style={styles.descriptionLabel}>Total Duration: </Text>
                <Text style={styles.text}>{item.TotalDuration}</Text>
              </View>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  // Render the main UI of the PhoneScreen component.
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Log History</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Search Contact Details"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={Phonlog.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

// Define the component's styles using StyleSheet.create.
const styles = StyleSheet.create({
  main:{
   padding:3,
   marginTop:4,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#007bff', 
    padding: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: 'white', 
    padding: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    marginBottom:4,
  },
  name: {
    fontSize: 16,
    marginBottom: 8,
    marginLeft:2,
    color: '#333', 
  },
  text: {
    marginTop:3,
    fontSize: 14,
    color: '#333', 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  startTime: {
    fontSize: 14,
    color: '#333',
  },
  descriptionLabelContainer: {
    flexDirection: 'row', 
  },
  descriptionLabel: {
    marginTop:3,
    color: 'blue', 
    fontSize: 14,
    fontWeight: 'bold', 
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
    marginLeft:3,
    paddingBottom:14,
},
searchWrapper: {
    flex: 1,
    backgroundColor: 'white',
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
    marginLeft:3,
    padding:4,
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
    marginRight:4,
},
searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
},
});

// Export the PhoneScreen component as the default export.
export default PhoneScreen;
