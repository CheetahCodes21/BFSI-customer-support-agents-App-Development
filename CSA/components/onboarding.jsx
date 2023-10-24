import React from 'react'
import { Text, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

export default function Onboardings() {
  return (
      <View>
          <Onboarding
              onSkip={() => navigation.replace("Home")}
              onDone={() => navigation.navigate("Home")}
              
              pages={[
                  {
                      backgroundColor: '#fff',
                      image: <Image source={require('../assets/Aniki Hamster.gif')} />,
                      title: 'Onboarding',
                      subtitle: 'Done with React Native Onboarding Swiper',
                  },
                  
  ]}
          />
    </View>
  )
}
