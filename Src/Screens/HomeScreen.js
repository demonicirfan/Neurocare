import React from 'react';
import { VStack } from 'native-base';
import AudioHome from '../Components/Audio/AudioHome';
import ProfileHome from '../Components/Profile/ProfileHome';
import Card from '../Components/Cards/Index';
const HomeScreen = () => {
  return (
    <VStack>
      <ProfileHome />
      <AudioHome />
      <Card />
    </VStack>
  );
};

export default HomeScreen;
