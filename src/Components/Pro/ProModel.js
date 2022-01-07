import React from 'react';
import {
  Center,
  Flex,
  Icon,
  VStack,
  HStack,
  Text,
  Pressable,
} from 'native-base';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const ProModel = () => {
  return (
    <Flex
      pt={'12'}
      bg={'#EBEBEB'}
      borderColor={'white'}
      borderWidth={'4px'}
      borderRadius={'28'}
      h='100%'
      alignItems={'center'}
      space={'8'}
    >
      <VStack alignItems={'center'} space={'7'}>
        <VStack w={'90px'}>
          <Icon
            as={Ionicons}
            name='md-wallet'
            size={'4xl'}
            color={'neurocare.blue'}
          />
          <Center
            backgroundColor={'neurocare.orange3'}
            position={'absolute'}
            rounded={'full'}
            borderWidth={'3px'}
            borderColor={'#EBEBEB'}
            bottom={'-2'}
            right={'0'}
          >
            <Icon as={Ionicons} name='add' size={'sm'} color='white' />
          </Center>
        </VStack>
        <VStack alignItems={'center'}>
          <Text fontSize={'3xl'}>Just for $3.99</Text>
          <Text fontSize={'lg'} color={'trueGray.500'}>
            Unlock all premium features
          </Text>
        </VStack>
        <Pressable onPress={() => console.warn('Stripe Payment')}>
          <HStack
            rounded={'full'}
            bg={'neurocare.blue'}
            alignItems='center'
            px='4'
            py={'3'}
            justifyContent={'space-between'}
            space={'16'}
          >
            <Text color={'white'} fontSize={'xl'} pl={'4'}>
              Buy Subscription
            </Text>
            <Icon
              size={'sm'}
              as={FontAwesome}
              name='angle-right'
              color={'white'}
            />
          </HStack>
        </Pressable>
      </VStack>
    </Flex>
  );
};

export default ProModel;
