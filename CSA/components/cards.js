import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const DetailsPage = ({navigation}) => {
  const images = [
    'https://www.bing.com/images/search?view=detailV2&ccid=nox3KwDL&id=6D288DCA7C905637CD69012F233F5BEC36594C49&thid=OIP.nox3KwDLEZ7cBwbkUOYtMgHaFE&mediaurl=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp9536407.jpg&exph=1231&expw=1800&q=professional+peoplewallpaper&simid=608029509843487228&form=IRPRST&ck=E07916A076F470CA2644FEF7BDA29477&selectedindex=3&ajaxhist=0&ajaxserp=0&vt=0&sim=11',
    'https://th.bing.com/th/id/OIP.SWITfgVcPeIhn1rAHNJwawHaHa?pid=ImgDet&w=768&h=768&rs=1',
    'https://th.bing.com/th/id/R.74432ca5886ad69308bf231db1b9ef3b?rik=%2f1KGE%2bm0SsBHSA&riu=http%3a%2f%2fwww.wallpaperbetter.com%2fwallpaper%2f465%2f179%2f662%2fbusiness-people-background-for-720P-wallpaper.jpg&ehk=udX%2fpN6UutfyJ12u40DTeBfaojeqiT0VfcWoStHqX6g%3d&risl=&pid=ImgRaw&r=0',
  ];
  const details = [
    { title: 'Communication services', text: 'Communication' },
    { title: 'Communication History', text: 'PhoneScreen' },
    { title: 'Analytics', text: 'Analtyics' },
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