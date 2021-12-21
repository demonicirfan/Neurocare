import React, { useState } from 'react';
import { VStack, Center, Text, Pressable, Box } from 'native-base';
import { MotiView } from 'moti';
import { Dimensions } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import DiagnosisMotion from './DiagnosisMotion';
import DiagnosisStill from './DiagnosisStill';
import Results from './Results';
import ModelHeader from '../Model/ModelHeader';
import GoBack from '../GoBack.js';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const Diagnosis = () => {
  const [diagnosisStarted, setDiagnosisStarted] = useState(false);
  const diagnosisSwitch = () => {
    setDiagnosisStarted(true);
  };

  const renderContent = () => <Results />;
  const renderHeader = () => <ModelHeader />;

  const sheetRef = React.useRef();

  return (
    <>
      <Box position={'absolute'} top={'16'} right={'6'} zIndex={3}>
        <GoBack />
      </Box>

      <Center
        backgroundColor={'blue.600'}
        align={'center'}
        justify={'space-evenly'}
        h={'full'}
        w={'full'}
      >
        <BottomSheet
          ref={sheetRef}
          snapPoints={[height * 0.73, height * 0.52, 0]}
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
                px={'4'}
              >
                <Center
                  rounded='full'
                  backgroundColor={'neurocare.orange3'}
                  px={'90px'}
                  py={'10px'}
                  shadow={'8'}
                >
                  <Text
                    color={'white'}
                    mx={'auto'}
                    fontSize={'24'}
                    fontFamily={'Poppins'}
                  >
                    RESULT
                  </Text>
                </Center>
              </Pressable>
            </>
          ) : (
            <>
              <DiagnosisStill />
              <Pressable
                style={{ paddingTop: 0 }}
                onPress={diagnosisSwitch}
                px={'4'}
              >
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
                    backgroundColor={'neurocare.orange3'}
                    px={'90px'}
                    py={'10px'}
                    shadow={'8'}
                  >
                    <Text
                      color={'white'}
                      mx={'auto'}
                      fontSize={'24'}
                      fontFamily={'Poppins'}
                    >
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
