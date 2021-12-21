import { Center, FlatList, Image } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';
import Header from './Header';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

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
        w={width * 0.6}
        h={height * 0.4}
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
