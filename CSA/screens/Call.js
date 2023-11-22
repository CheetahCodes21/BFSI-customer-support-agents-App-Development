import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  Modal,
  ScrollView
} from 'react-native';
import Communications from 'react-native-communications';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CustomAPI from '../api/custom';

const ContactPage = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [comment, setComment] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  // const [filteredData, setFilteredData] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCallPress = () => {
    if (phoneNumber) {
      Communications.phonecall(phoneNumber, true);
    }
  };
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the CustomAPI based on the search term
  const filteredData = CustomAPI.filter(
    (item) =>
      item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    // const filteredData = CustomAPI.filter(
    //   (item) =>
    //     item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     item.status.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    // setFilteredData(filteredData); 
  };

  return (
    <ImageBackground
    source={{
      uri:
          'https://img.freepik.com/premium-vector/abstract-watercolor-background_71674-1277.jpg',
        }}
        style={styles.container}
        >
      <ScrollView>
      <View style={styles.mainContainer}>
        {/* Header */}
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Make Call</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>

        {/* Input Fields */}
        <View style={styles.inputBox}>
          <TextInput
            style={styles.phoneNumberInput}
            placeholder="Enter Phone Number"
            keyboardType="phone-pad"
            placeholderTextColor={'purple'}
            onChangeText={(text) => setPhoneNumber(text)}
            value={phoneNumber}
          />
          <TouchableOpacity onPress={handleCallPress}>
            {/* Use MaterialCommunityIcons here */}
            <MaterialCommunityIcons
              name="phone"
              size={30}
              color="black"
              style={styles.callIcon}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.commentInput}
          placeholder="Call purpose"
          placeholderTextColor={'purple'}
          multiline
          numberOfLines={6}
          onChangeText={(text) => setComment(text)}
          value={comment}
        />

        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalBox}>
              {/* Modal Header */}
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Make Call</Text>
                <TouchableOpacity onPress={toggleModal}>
                  {/* Use MaterialCommunityIcons for close icon */}
                  <MaterialCommunityIcons
                    name="close"
                    size={30}
                    color="black"
                    style={styles.closeIcon}
                  />
                </TouchableOpacity>
              </View>
              {/* Modal Content */}
              <View style={styles.modalContent}>
                {/* Input Fields */}
                <View style={styles.inputBox}>
                  <TextInput
                    style={styles.phoneNumberInput}
                    placeholder="Enter Phone Number"
                    keyboardType="phone-pad"
                    placeholderTextColor={'purple'}
                    onChangeText={(text) => setPhoneNumber(text)}
                    value={phoneNumber}
                  />
                  <TouchableOpacity onPress={handleCallPress}>
                    {/* Use MaterialCommunityIcons here */}
                    <MaterialCommunityIcons
                      name="phone"
                      size={30}
                      color="black"
                      style={styles.callIcon}
                    />
                  </TouchableOpacity>
                </View>
                <TextInput
                  style={styles.commentInput}
                  placeholder="Call purpose"
                  placeholderTextColor={'purple'}
                  multiline
                  numberOfLines={6}
                  onChangeText={(text) => setComment(text)}
                  value={comment}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.cont}>
        <Text style={styles.headerText}>Phone Log History</Text>
        <View style={styles.co}>
        <TextInput
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={(text) => setSearchTerm(text)}
        value={searchTerm}
      />
        <TouchableOpacity onPress={handleSearch} style={styles.searchIconContainer}>
          <MaterialIcons name="search" size={24} color="black" />
        </TouchableOpacity>
        </View>
      
        <View style={styles.tableHeader}>
        <Text style={styles.headingpart}>First Name</Text>
        <Text style={styles.headingpart}>Number</Text>
        <Text style={styles.headingpart}>ID</Text>
        <Text style={styles.headingpart}>Status</Text>
      </View>
      {filteredData.map((item) => (
        <View style={styles.tableRow} key={item.id}>
          <Text style={styles.cellText}>{item.firstName}</Text>
          <Text style={styles.cellno}>{item.number}</Text>
          <Text style={styles.cellText}>{item.id}</Text>
          <Text style={styles.cellText}>{item.status}</Text>
        </View>
      ))}

      </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  co:{
    flexDirection: 'row',
  },
  searchIconContainer: {
    // padding: 20,
    marginRight:15,
    marginTop:15,
    marginBottom:15,
    borderRadius:10,
    padding:5,
    backgroundColor:'green'
  },
  cont: {
    paddingHorizontal: 20,
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.5)',
    margin:10,
    borderRadius:10
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius:10,
    paddingHorizontal: 10,
    width:300
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 5,
  },
  headingpart: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingBottom: 5,
  },
  cellText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
    container: {
      flex: 1,
    },
      headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      
        borderBlockColor:"black",
        margin: 10,
      },
      headingText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    mainContainer: {
      backgroundColor: 'rgba(255,255,255,0.7)',
      padding: 10,
      margin: 10,
      borderRadius: 10,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      backgroundColor: 'purple',
      padding: 10,
      borderRadius: 10,
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
     
      marginBottom:25

    },
    inputBox: {
      flexDirection: 'row',
      marginBottom: 20,
      alignItems: 'center',
    },
    phoneNumberInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      padding: 5,
      color: 'purple',
      flex: 1,
    },
    callIcon: {
      width: 30,
      height: 30,
      marginLeft: 10,
    },
    commentInput: {
      height: 100,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      padding: 5,
      color: 'purple',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalBox: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: 10,
      padding: 20,
      width: '80%',
    },
    modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
      backgroundColor: 'purple',
      padding: 10,
      borderRadius: 10,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
    modalContent: {
      flex: 1,
    },
    closeIcon: {
      marginLeft: 10,
    },
  });
  
 

export default ContactPage;

