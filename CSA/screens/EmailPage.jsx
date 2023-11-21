import React, { useState } from 'react';
import { View, Button, ImageBackground, StyleSheet, Image, TextInput, Alert ,TouchableOpacity,Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MailComposer from 'expo-mail-composer'; // MailComposer to compose email

import Logo from '../assets/images/Logo.png';

const EmailPage = () => {
  const [toEmail, setToEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [attachedImages, setAttachedImages] = useState([]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Please allow access to your photos');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      if (result.assets && result.assets.length > 0) {
        const selectedImage = result.assets[0];
        setAttachedImages([...attachedImages, selectedImage.uri]);
        // You might want to use selectedImage.uri or other properties from the selectedImage object
      }
    }
  };

  const AttachedImage = ({ uri, onRemove }) => (
    <View style={styles.attachedImageContainer}>
      <Image source={{ uri }} style={styles.attachedImage} />
      <TouchableOpacity onPress={onRemove}>
        <Text style={styles.removeText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  const removeAttachedImage = (index) => {
    const updatedImages = attachedImages.filter((_, i) => i !== index);
    setAttachedImages(updatedImages);
  };

  const handleEmail = () => {
    if (!toEmail || !subject || !body) {
      Alert.alert('Incomplete Details', 'Please fill in all fields');
      return;
    }

    MailComposer.composeAsync({
      recipients: [toEmail],
      subject: subject,
      body: body,
      attachments: attachedImages,
    });
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://img.freepik.com/premium-vector/abstract-watercolor-background_71674-1277.jpg',
      }}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <Image source={Logo} style={styles.logo} />
  
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="To"
            onChangeText={(text) => setToEmail(text)}
            value={toEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Subject"
            onChangeText={(text) => setSubject(text)}
            value={subject}
          />
          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder="Body"
            multiline
            onChangeText={(text) => setBody(text)}
            value={body}
          />
        </View>
         <View style={styles.buttonContainer}>
         <Button title="Attach Image" color="purple" onPress={pickImage} />
        {attachedImages.map((uri, index) => (
          // <Image key={index} source={{ uri }} style={{ width: 50, height: 50 }} />
          <AttachedImage
          key={index}
          uri={uri}
          onRemove={() => removeAttachedImage(index)}
        />
        ))}
        <Button  title="Submit" color="purple" onPress={handleEmail} />
         </View>
       
      </View>
    </ImageBackground>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%', // Adjust the width of the form container as desired
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 8,
    marginVertical: 10,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  attachedImagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  attachedImageContainer: {
    margin: 5,
  },
  attachedImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  removeText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 5,
    fontWeight:'bold'
  },
});


export default EmailPage;
