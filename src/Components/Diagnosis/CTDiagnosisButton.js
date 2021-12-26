import { Icon, Pressable, HStack, VStack, Text, IconButton } from 'native-base';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Dimensions } from 'react-native';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

function CTDiagnosisButton() {
  const navigation = useNavigation();
  return (
    <Pressable
      bg={'neurocare.blue'}
      h={height * 0.1}
      mx={'auto'}
      rounded={'xl'}
      onPress={() => {
        navigation.navigate('Profile');
      }}
    >
      <HStack
        space='3'
        alignItems='center'
        justifyContent={'space-between'}
        my={'auto'}
        w={width * 0.86}
        mx={'auto'}
        px={width * 0.04}
      >
        <Icon
          size='md'
          as={FontAwesome5}
          name='brain'
          color='white'
          zIndex={'1'}
          alignSelf={'center'}
          w={'100%'}
        />

        <VStack w={width * 0.53}>
          <Text
            color={'white'}
            fontSize={'lg'}
            fontWeight={'500'}
            fontFamily={'Poppins'}
          >
            Diagnosis Results
          </Text>
          <Text color={'gray.200'} fontSize={'sm'} fontFamily={'Poppins'}>
            Last Diagnosed
          </Text>
        </VStack>

        <Icon size={'sm'} as={FontAwesome} name='angle-right' color={'white'} />
      </HStack>
    </Pressable>
  );
}

export default CTDiagnosisButton;
