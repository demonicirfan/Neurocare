import { MotiView } from 'moti';
import { VStack, Center, Text, Pressable } from 'native-base';
import React, { useState } from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import DiagnosisMotion from './DiagnosisMotion';
import DiagnosisStill from './DiagnosisStill';

const Diagnosis = () => {
  const [diagnosisStarted, setDiagnosisStarted] = useState(false);
  const diagnosisSwitch = () => {
    setDiagnosisStarted(true);
  };
  return (
    <Center
      backgroundColor={'blue.600'}
      align={'center'}
      justify={'space-evenly'}
      h={'full'}
      w={'full'}
    >
      <VStack space='32'>
        {diagnosisStarted ? (
          <SharedElement id={'stillSharedElement'}>
            <DiagnosisMotion />
          </SharedElement>
        ) : (
          <DiagnosisStill />
        )}
        <Pressable style={{ paddingTop: 0 }}>
          <MotiView
            from={{
              translateY: 90,
            }}
            animate={{
              translateY: 0,
            }}
          >
            <Center
              rounded='full'
              backgroundColor={'#FBBB33'}
              px={'90px'}
              py={'10px'}
              shadow={'8'}
            >
              <Text
                color={'white'}
                mx={'auto'}
                fontSize={'24'}
                onPress={diagnosisSwitch}
              >
                START
              </Text>
            </Center>
          </MotiView>
        </Pressable>
      </VStack>
    </Center>
  );
};

export default Diagnosis;
