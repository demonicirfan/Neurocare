import React from 'react';
import { VStack, ScrollView } from 'native-base';
import Diagnosis from '../../Components/Diagnosis/DiagnosisHome.js';
import Card from '../../Components/Cards/Patient/Index';
import {
  ProfileButton,
  ProfileHome,
} from '../../Components/Profile/Patient/Index';

const HomeScreen = () => {
  return (
    <ScrollView
      bg={'neurocare.orange1'}
      h={'full'}
      showsVerticalScrollIndicator={false}
    >
      <VStack>
        <ProfileHome />
        <Diagnosis />
        <Card />
        <ProfileButton />
      </VStack>
    </ScrollView>
  );
};

export default HomeScreen;
