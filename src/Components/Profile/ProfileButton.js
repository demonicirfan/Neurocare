import { Icon, Pressable, HStack, VStack, Text, IconButton } from 'native-base';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function ProfileButton() {
  const navigation = useNavigation();
  return (
    <Pressable
      bg={'#F2E3D0'}
      h={'60px'}
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
        w={'280px'}
        mx={'auto'}
        px={'4'}
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
              color='#FBBB33'
              zIndex={'1'}
              alignSelf={'center'}
            />
          }
          onPress={() => {
            console.log('hello');
          }}
        />

        <VStack w={'160px'}>
          <Text fontSize={'lg'}>Profile</Text>
          <Text color={'gray.400'}>View Profile</Text>
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
