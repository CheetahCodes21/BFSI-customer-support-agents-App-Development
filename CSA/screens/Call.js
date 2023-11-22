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
} from 'react-native';
import Communications from 'react-native-communications';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ContactPage = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [comment, setComment] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCallPress = () => {
    if (phoneNumber) {
      Communications.phonecall(phoneNumber, true);
    }
  };

  return (
    <ImageBackground
      source={{
        uri:
          'https://img.freepik.com/premium-vector/abstract-watercolor-background_71674-1277.jpg',
      }}
      style={styles.container}
    >
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
      color: 'white',
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

