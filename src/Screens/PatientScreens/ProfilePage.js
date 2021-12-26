import { VStack } from 'native-base';
import React from 'react';
import {
  Details,
  ProfileHome,
  EditButton,
  LogoutButton,
} from '../../Components/Profile/Patient/Index';

const ProfilePage = () => {
  return (
    <VStack bg={'neurocare.orange1'} h={'full'}>
      <ProfileHome />
      <EditButton />
      <Details />
      <LogoutButton />
    </VStack>
  );
};

export default ProfilePage;
