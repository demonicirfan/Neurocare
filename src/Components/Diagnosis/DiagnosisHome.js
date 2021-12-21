import { useNavigation } from '@react-navigation/native';
import { Box, Pressable } from 'native-base';
import React from 'react';
import DiagnosisStill from './DiagnosisStill';
import { SharedElement } from 'react-native-shared-element';

const DiagnosisHome = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('Diagnosis')}>
      <Box mx={'auto'}>
        <SharedElement id={'stillSharedElement'}>
          <DiagnosisStill />
        </SharedElement>
      </Box>
    </Pressable>
  );
};

export default DiagnosisHome;
