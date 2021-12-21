import { Center, Text, FlatList, Image } from 'native-base';
import React from 'react';
import Header from './Header';

const ContactDetail = ({ route }) => {
  const data = route.params.data;

  const renderItem = ({ item }) => {
    return (
      <Image
        rounded={'2xl'}
        alt='alt text'
        source={{ uri: item }}
        resizeMode='cover'
        m={'4'}
        w={'64'}
        h={'56'}
      />
    );
  };
  return (
    <Center my={'8'}>
      <Header title={data.name} phoneNumber={data.phoneNumber} />
      <FlatList
        data={data.images}
        renderItem={renderItem}
        keyExtractor={route.params.key}
        showsVerticalScrollIndicator={false}
      />
    </Center>
  );
};

export default ContactDetail;
