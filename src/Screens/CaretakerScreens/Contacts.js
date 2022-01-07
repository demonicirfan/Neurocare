import { Center, Container, HStack, VStack } from 'native-base';
import React from 'react';
import ContactsList from '../../Components/Contacts/ContactsList';
import Header from '../../Components/Header';

const Contacts = () => {
  return (
    <VStack py={'10'}>
      <Center px={'4'}>
        <Header title={'Contacts'} />
        <ContactsList />
      </Center>
    </VStack>
  );
};

export default Contacts;
