import React, { useState } from 'react';
import { VStack, Center, Text, Pressable } from 'native-base';
import { MotiView } from 'moti';

import BottomSheet from 'reanimated-bottom-sheet';
import DiagnosisMotion from './DiagnosisMotion';
import DiagnosisStill from './DiagnosisStill';
import Results from './Results';

const Diagnosis = () => {
  const [diagnosisStarted, setDiagnosisStarted] = useState(false);
  const diagnosisSwitch = () => {
    setDiagnosisStarted(true);
  };

  const renderContent = () => <Results />;
  const renderHeader = () => (
    <Center
      w={'40px'}
      h={'4px'}
      bg={'gray.300'}
      position={'absolute'}
      left={'44%'}
      mt={'15px'}
      rounded={'full'}
    />
  );

  const sheetRef = React.useRef();

  return (
    <>
      <Center
        backgroundColor={'blue.600'}
        align={'center'}
        justify={'space-evenly'}
        h={'full'}
        w={'full'}
      >
        <BottomSheet
          ref={sheetRef}
          snapPoints={[450, 370, 0]}
          initialSnap={2}
          borderRadius={24}
          renderContent={renderContent}
          renderHeader={renderHeader}
        />
        <VStack space='32' h={'90%'} pt={20} justifyContent={'space-between'}>
          {diagnosisStarted ? (
            <>
              <DiagnosisMotion />
              <Pressable
                style={{ paddingTop: 0 }}
                onPress={() => sheetRef.current.snapTo(0)}
              >
                <Center
                  rounded='full'
                  backgroundColor={'#FBBB33'}
                  px={'90px'}
                  py={'10px'}
                  shadow={'8'}
                >
                  <Text color={'white'} mx={'auto'} fontSize={'24'}>
                    RESULT
                  </Text>
                </Center>
              </Pressable>
            </>
          ) : (
            <>
              <DiagnosisStill />
              <Pressable style={{ paddingTop: 0 }} onPress={diagnosisSwitch}>
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
                    <Text color={'white'} mx={'auto'} fontSize={'24'}>
                      START
                    </Text>
                  </Center>
                </MotiView>
              </Pressable>
            </>
          )}
        </VStack>
      </Center>
    </>
  );
};

export default Diagnosis;
