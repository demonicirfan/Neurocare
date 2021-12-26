import { Icon, Pressable, HStack, VStack, Text, IconButton } from 'native-base';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Dimensions } from 'react-native';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

function ProfileButton() {
  const navigation = useNavigation();
  return (
    <Pressable
      bg={'neurocare.orange2'}
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
        <IconButton
          rounded='full'
          bg={'white'}
          size={'sm'}
          icon={
            <Icon
              size='sm'
              as={FontAwesome}
              name='user-circle'
              color='neurocare.orange3'
              zIndex={'1'}
              alignSelf={'center'}
            />
          }
          onPress={() => {
            console.log('hello');
          }}
        />

        <VStack w={width * 0.53}>
          <Text fontSize={'lg'} fontWeight={'500'} fontFamily={'Poppins'}>
            Profile
          </Text>
          <Text color={'gray.400'} fontSize={'sm'} fontFamily={'Poppins'}>
            View Profile
          </Text>
        </VStack>

        <Icon
          size={'sm'}
          as={FontAwesome}
          name='angle-right'
          color={'gray.600'}
        />
      </HStack>
    </Pressable>
  );
}

export default ProfileButton;
