import { VStack } from 'native-base';
import React from 'react';
import Details from '../Components/Profile/Details';
import ProfileHome from '../Components/Profile/ProfileHome';
import EditButton from '../Components/Profile/EditButton';
import LogoutButton from '../Components/Profile/LogoutButton';

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
