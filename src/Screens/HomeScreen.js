import React from 'react';
import { VStack } from 'native-base';
import Diagnosis from '../Components/Diagnosis/DiagnosisHome.js';
import ProfileHome from '../Components/Profile/ProfileHome';
import Card from '../Components/Cards/Index';
import ProfileButton from '../Components/Profile/ProfileButton.js';

const HomeScreen = () => {
  return (
    <VStack bg={'neurocare.orange1'}>
      <ProfileHome />
      <Diagnosis />
      <Card />
      <ProfileButton />
    </VStack>
  );
};

export default HomeScreen;
