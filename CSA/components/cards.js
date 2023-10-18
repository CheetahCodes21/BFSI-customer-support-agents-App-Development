import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const DetailsPage = ({navigation}) => {
  const images = [
    'https://wallpapers.com/images/featured/cute-anime-uptxxcxl4h2zoe9r.webp',
    'https://w0.peakpx.com/wallpaper/740/501/HD-wallpaper-anime-girl-alone-anime-cute-girl-nature-stars.jpg',
    'https://img.freepik.com/free-photo/girl-with-pink-hair-guitar-her-shirt_1340-32655.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=sph',
    'https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl_147933-100.jpg?w=740',
    'https://images.wallpapersden.com/image/ws-satoru-gojo-acid-blue-eyes-jujutsu-kaisen_91485.jpg',
  ];
  const details = [
    { title: 'Communication services', text: 'Communication' },
    { title: 'Communication History', text: '#' },
    { title: 'Analytics', text: '' },
  ];

  return (
    <ImageBackground
      source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/002/299/195/small_2x/violet-purple-white-watercolor-brush-paint-background-vector.jpg' }}
      style={styles.container}
    >
      <ScrollView style={styles.scrollContainer}>
        <Swiper
          style={styles.swiper}
          showsPagination={false}
          autoplay={true}
          autoplayTimeout={3}
        >
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
        </Swiper>

        <View style={styles.detailsContainer}>
          {details.map((item, index) => (
              <TouchableOpacity style={styles.detailsCard} key={index} onPress={
                  () => {
                      //   NavigationContainer.navigate(item.title);
                      navigation.navigate(item.text);
                      
                  }
            }>
              <Text style={styles.detailsTitle}>{item.title}</Text>
              <Text style={styles.detailsText}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
  },
  swiper: {
    height: 400,
  },
  image: {
    flex: 1,
    margin: 3,
    borderRadius: 8,
  },
  detailsContainer: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    margin: 8,
    borderRadius: 10,
  },
  detailsCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    elevation: 3, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 }, // for iOS shadow
    shadowOpacity: 0.25, // for iOS shadow
    opacity:0.5,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'darkorange', // Set title text color to dark orange
  },
  detailsText: {
    fontSize: 16,
  },
});

export default DetailsPage;