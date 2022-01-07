import React from 'react';
import {
  Center,
  Container,
  HStack,
  VStack,
  FlatList,
  Avatar,
  Pressable,
  Text,
} from 'native-base';
import Data from '../../../Data/ContactsData';

const renderItem = ({ item }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Detail', { data: item });
      }}
    >
      <HStack space='5'>
        <Avatar
          source={{
            uri: `{${item.img}}`,
          }}
        >
          {item.name}
        </Avatar>
        <VStack space='5'>
          <Text>{item.name}</Text>
          <Text>{item.relationShip}</Text>
        </VStack>
      </HStack>
    </Pressable>
  );
};

const ContactsList = () => {
  return (
    <VStack>
      <FlatList
        data={Data}
        Vertical
        renderItem={renderItem}
        showsVerticalScrollIndicator={true}
      />
    </VStack>
  );
};

export default ContactsList;
