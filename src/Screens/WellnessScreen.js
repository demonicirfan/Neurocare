import { Box } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';
import Contacts from '../Components/Wellness/Carousel';
import Header from '../Components/Wellness/Header';
import VoiceAnimation from '../Components/Wellness/VoiceAnimation';

var height = Dimensions.get('window').height;

function WellnessScreen() {
  return (
    <Box py={height * 0.06} bg={'neurocare.orange1'} h={'full'}>
      <Header title={'Ask for Help'} />
      <Contacts />
      <VoiceAnimation />
    </Box>
  );
}

export default WellnessScreen;
