import { useNavigation } from '@react-navigation/native';
import { Box } from 'native-base';
import React from 'react';
import { Pressable } from 'react-native';
import DiagnosisStill from './DiagnosisStill';
import { SharedElement } from 'react-native-shared-element';

const DiagnosisHome = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('Diagnosis')}>
      <Box mx={'auto'} borderRadius={'xl'}>
        <SharedElement id={'stillSharedElement'}>
          <DiagnosisStill />
        </SharedElement>
      </Box>
    </Pressable>
  );
};

export default DiagnosisHome;
