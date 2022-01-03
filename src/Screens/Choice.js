import { useNavigation } from '@react-navigation/native';
import { VStack, Text, Container, HStack } from 'native-base';
import React from 'react';
import { Image, Pressable } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { Dimensions } from 'react-native';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const ChoiceScreen = () => {
  const navigation = useNavigation();
  const onPressPatientCard = () => {
    navigation.navigate('PatientInfo');
  };
  const onPressCaretakerCard = () => {
    navigation.navigate('Reminders');
  };
  return (
    <VStack h={'full'}>
      <VStack mt={height * 0.088} ml={'8'}>
        <Text fontSize={'4xl'} fontWeight={'600'}>
          Sign Up as
        </Text>
        <Text fontSize={'lg'}>Select for Patient or caretaker</Text>
      </VStack>
      <HStack space='6' mx={'auto'} mt={'40'}>
        <Shadow
          distance={'22'}
          offset={[0, 20]}
          startColor='#00000008'
          finalColor='#00000000'
        >
          <Shadow
            distance={'10'}
            offset={[0, 5]}
            startColor='#00000004'
            finalColor='#00000000'
          >
            <Pressable onPress={onPressPatientCard}>
              <VStack
                space='3'
                alignItems='center'
                bg={'white'}
                borderRadius={'3xl'}
                px={width * 0.07}
                py={3}
              >
                <Image
                  source={require('./forgot.png')}
                  style={{
                    width: width * 0.23,
                    height: width * 0.23,
                    margin: 6,
                  }}
                />
                <Text fontSize={'xl'} fontWeight={'500'} fontFamily={'Poppins'}>
                  Patient
                </Text>
              </VStack>
            </Pressable>
          </Shadow>
        </Shadow>
        <Shadow
          distance={'22'}
          offset={[0, 20]}
          startColor='#00000008'
          finalColor='#00000000'
        >
          <Shadow
            distance={'10'}
            offset={[0, 5]}
            startColor='#00000004'
            finalColor='#00000000'
          >
            <Pressable onPress={onPressCaretakerCard}>
              <VStack
                space='3'
                alignItems='center'
                bg={'white'}
                borderRadius={'3xl'}
                px={width * 0.07}
                py={3}
              >
                <Image
                  source={require('./forgot.png')}
                  style={{
                    width: width * 0.23,
                    height: width * 0.23,
                    margin: 6,
                  }}
                />
                <Text fontSize={'xl'} fontWeight={'500'} fontFamily={'Poppins'}>
                  Caretaker
                </Text>
              </VStack>
            </Pressable>
          </Shadow>
        </Shadow>
      </HStack>
    </VStack>
  );
};

export default ChoiceScreen;
