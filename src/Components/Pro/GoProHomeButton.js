import { Center, HStack, Icon, Text, VStack, Pressable } from 'native-base';
import React, { useRef } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import ModelHeader from '../Model/ModelHeader';
import ProModel from './ProModel';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const GoProHome = () => {
  const sheetRef = useRef();

  const renderContent = () => <ProModel />;
  const renderHeader = () => <ModelHeader />;

  return (
    <>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[height * 0.55, height * 0.44, 0]}
        initialSnap={2}
        borderRadius={24}
        renderContent={renderContent}
        renderHeader={renderHeader}
      />
      <HStack
        space='25px'
        alignItems={'flex-start'}
        bg='white'
        p={'24px'}
        w={width * 0.85}
        mx='auto'
        rounded='3xl'
      >
        <Center bg={'orange.50'} rounded={'full'} w={'45px'} h={'45px'}>
          <Icon
            as={MaterialCommunityIcons}
            name='crown'
            color={'yellow.400'}
            size={'md'}
          />
        </Center>
        <VStack space='5'>
          <Text
            fontSize='xl'
            fontWeight={'600'}
            fontFamily={'Poppins'}
            w={'65%'}
          >
            Get unlimited access to everything
          </Text>
          <Pressable onPress={() => sheetRef.current.snapTo(0)}>
            <Center bg='neurocare.blue' py={'8px'} rounded={'full'} w={'118px'}>
              <Text fontSize='2xl' color={'white'} fontWeight={'600'}>
                Go Pro
              </Text>
            </Center>
          </Pressable>
        </VStack>
      </HStack>
    </>
  );
};

export default GoProHome;
