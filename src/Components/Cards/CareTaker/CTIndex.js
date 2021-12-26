import { HStack } from 'native-base';
import React from 'react';
import LocationCard from './LocationCard';
import ServicesCard from './ServicesCard';

const Index = () => {
  return (
    <HStack space='6' mx={'auto'} my={8}>
      <LocationCard />
      <ServicesCard />
    </HStack>
  );
};

export default Index;
