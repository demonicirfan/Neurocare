import React from 'react';
import { VStack } from 'native-base';
import Diagnosis from '../Components/Diagnosis/DiagnosisHome.js';
import ProfileHome from '../Components/Profile/ProfileHome';
import Card from '../Components/Cards/Index';

const HomeScreen = () => {
  return (
    <VStack>
      <ProfileHome />
      <Diagnosis />
      <Card />
    </VStack>
  );
};

export default HomeScreen;
