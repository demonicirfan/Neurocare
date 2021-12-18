import { HStack } from 'native-base';
import React from 'react';
import ProfileCard from './ProfileCard';
import WellnessCard from './WellnessCard';

const Index = () => {
  return (
    <HStack space='4' mx={'auto'} my={8}>
      <WellnessCard />
      <ProfileCard />
    </HStack>
  );
};

export default Index;
