import React from 'react';
import { VStack } from 'native-base';
import Diagnosis from '../../Components/Diagnosis/DiagnosisHome.js';
import Card from '../../Components/Cards/Patient/Index';
import {
  ProfileButton,
  ProfileHome,
} from '../../Components/Profile/Patient/Index';

const HomeScreen = () => {
  return (
    <VStack bg={'neurocare.orange1'} h={'full'}>
      <ProfileHome />
      <Diagnosis />
      <Card />
      <ProfileButton />
    </VStack>
  );
};

export default HomeScreen;
