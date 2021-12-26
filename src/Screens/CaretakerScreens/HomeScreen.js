import React from 'react';
import { ScrollView } from 'native-base';
import ProfileHome from '../../Components/Profile/Caretaker/ProfileHome';
import CTIndex from '../../Components/Cards/CareTaker/CTIndex';
import CTDiagnosisButton from '../../Components/Diagnosis/CTDiagnosisButton';
import CTContactButton from '../../Components/Contacts/CTContactsButton';
import GoProHome from '../../Components/Pro/GoProHomeButton';

const CTHomeScreen = () => {
  return (
    <ScrollView bg={'neurocare.orange1'} h={'full'}>
      <ProfileHome />
      <CTDiagnosisButton />
      <CTIndex />
      <GoProHome />
      <CTContactButton />
    </ScrollView>
  );
};

export default CTHomeScreen;
