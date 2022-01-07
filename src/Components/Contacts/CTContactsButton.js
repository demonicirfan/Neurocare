import { Icon, Pressable, HStack, VStack, Text, Center } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Dimensions } from 'react-native';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

function CTDiagnosisButton() {
  const navigation = useNavigation();
  return (
    <Pressable
      bg={'neurocare.orange2'}
      h={height * 0.1}
      mx={'auto'}
      rounded={'xl'}
      onPress={() => {
        navigation.navigate('Contacts');
      }}
      my={'8'}
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
        <Center
          bg={'white'}
          rounded={'full'}
          borderWidth={'2px'}
          borderColor={'white'}
        >
          <Icon
            size='md'
            as={FontAwesome}
            name='user-circle'
            color='neurocare.orange3'
            zIndex={'1'}
            alignSelf={'center'}
          />
        </Center>

        <VStack w={width * 0.53}>
          <Text fontSize={'lg'} fontWeight={'500'} fontFamily={'Poppins'}>
            Contacts
          </Text>
          <Text color={'gray.400'} fontSize={'sm'} fontFamily={'Poppins'}>
            Manage Patients Contacts
          </Text>
        </VStack>

        <Icon size={'sm'} as={FontAwesome} name='angle-right' color={'white'} />
      </HStack>
    </Pressable>
  );
}

export default CTDiagnosisButton;
