import { Center } from 'native-base';
import React from 'react';
import Contacts from '../Components/Wellness/Carousel';
import Header from '../Components/Wellness/Header';
import VoiceAnimation from '../Components/Wellness/VoiceAnimation';
function WellnessScreen() {
  return (
    <Center my={'12'}>
      <Header title={'Ask for Help'} />
      <Contacts />
      <VoiceAnimation />
    </Center>
  );
}

export default WellnessScreen;
