import { Center } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';

var width = Dimensions.get('window').width;

const ModelHeader = () => {
  return (
    <Center
      w={width * 0.14}
      h={'5px'}
      bg={'gray.300'}
      position={'absolute'}
      left={'45%'}
      mt={'15px'}
      rounded={'full'}
    />
  );
};

export default ModelHeader;
