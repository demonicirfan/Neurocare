import { Pressable, Text } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const EditButton = () => {
  return (
    <Pressable
      bg={'yellow.500'}
      w={width * 0.26}
      h={height * 0.055}
      ml={'8%'}
      mr={'80%'}
      rounded={'full'}
      alignItems={'center'}
      onPress={() => {
        console.warn('edit pressed');
      }}
    >
      <Text m={'auto'} fontSize={'2xl'} color={'white'} fontFamily={'Poppins'}>
        Edit
      </Text>
    </Pressable>
  );
};

export default EditButton;
