import { HStack } from 'native-base';
import React from 'react';
import ReminderCard from './ReminderCard';
import WellnessCard from './WellnessCard';

const Index = () => {
  return (
    <HStack space='6' mx={'auto'} my={8}>
      <WellnessCard />
      <ReminderCard />
    </HStack>
  );
};

export default Index;
