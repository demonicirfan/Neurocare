import { useNavigation } from '@react-navigation/native';
import { VStack, Text, Box, HStack, Pressable, Icon } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const ChoiceScreen = () => {
  const navigation = useNavigation();
  const onPressPatientCard = () => {
    navigation.navigate('PatientInfo');
  };
  const onPressCaretakerCard = () => {
    navigation.navigate('CTHome');
  };
  return (
    <VStack
      borderColor={'white'}
      borderWidth={'4px'}
      borderRadius={'28'}
      h='100%'
      alignItems={'center'}
      space={'2'}
      pt={'4'}
      bg={'#EBEBEB'}
    >
      <VStack>
        <Text
          fontSize={'4xl'}
          fontWeight={'700'}
          mt={'6'}
          alignSelf={'center'}
          color={'neurocare.orange3'}
        >
          SignUp As
        </Text>
        <Text
          fontSize={'md'}
          fontWeight={'400'}
          mt={'4'}
          alignSelf={'center'}
          textAlign={'center'}
          maxW={'200px'}
        >
          Who do you want to Signup as to neurocare app
        </Text>
      </VStack>
      <HStack space='8' mx={'auto'} py={'10'}>
        <Shadow
          distance={'22'}
          offset={[0, 20]}
          startColor='#00000010'
          finalColor='#00000001'
        >
          <Shadow
            distance={'10'}
            offset={[0, 4]}
            startColor='#00000004'
            finalColor='#00000000'
          >
            <Pressable onPress={onPressPatientCard}>
              {({ isHovered, isFocused, isPressed }) => {
                return (
                  <>
                    {isPressed && (
                      <Box
                        bg={'neurocare.green'}
                        w={'5'}
                        h={'5'}
                        rounded={'full'}
                        position={'absolute'}
                        zIndex={1}
                        right={'-4'}
                        top={'-4'}
                      >
                        <Icon
                          pt={'2px'}
                          pr={'1px'}
                          size='xs'
                          as={MaterialIcons}
                          name='done'
                          color='white'
                          alignSelf={'center'}
                        />
                      </Box>
                    )}
                    <VStack
                      space='2'
                      alignItems='center'
                      bg={'white'}
                      borderRadius={'2xl'}
                      w={width / 3}
                      py={2}
                      style={{
                        transform: [
                          {
                            scale: isPressed ? 0.96 : 1,
                          },
                        ],
                      }}
                    >
                      <Image
                        source={require('../../Components/Cards/Patient/welness.png')}
                        style={{
                          width: width * 0.13,
                          height: width * 0.13,
                          margin: 6,
                        }}
                      />
                      <Text
                        fontSize={'xl'}
                        fontWeight={'400'}
                        fontFamily={'Poppins'}
                      >
                        Patient
                      </Text>
                    </VStack>
                  </>
                );
              }}
            </Pressable>
          </Shadow>
        </Shadow>
        <Shadow
          distance={'22'}
          offset={[0, 20]}
          startColor='#00000010'
          finalColor='#00000001'
        >
          <Shadow
            distance={'10'}
            offset={[0, 5]}
            startColor='#00000004'
            finalColor='#00000000'
          >
            <Pressable onPress={onPressCaretakerCard}>
              {({ isHovered, isFocused, isPressed }) => {
                return (
                  <>
                    {isPressed && (
                      <Box
                        bg={'neurocare.green'}
                        w={'5'}
                        h={'5'}
                        rounded={'full'}
                        position={'absolute'}
                        zIndex={1}
                        right={'-4'}
                        top={'-4'}
                      >
                        <Icon
                          pt={'2px'}
                          pr={'1px'}
                          size='xs'
                          as={MaterialIcons}
                          name='done'
                          color='white'
                          alignSelf={'center'}
                        />
                      </Box>
                    )}
                    <VStack
                      space='2'
                      alignItems='center'
                      bg={'white'}
                      borderRadius={'2xl'}
                      w={width / 3}
                      py={2}
                      style={{
                        transform: [
                          {
                            scale: isPressed ? 0.96 : 1,
                          },
                        ],
                      }}
                    >
                      <Image
                        source={require('./caretaker.png')}
                        style={{
                          width: width * 0.13,
                          height: width * 0.13,
                          margin: 6,
                        }}
                      />
                      <Text
                        fontSize={'xl'}
                        fontWeight={'400'}
                        fontFamily={'Poppins'}
                      >
                        Caretaker
                      </Text>
                    </VStack>
                  </>
                );
              }}
            </Pressable>
          </Shadow>
        </Shadow>
      </HStack>
    </VStack>
  );
};

export default ChoiceScreen;
