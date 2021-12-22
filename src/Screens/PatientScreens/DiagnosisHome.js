import { Box } from 'native-base';
import React from 'react';
import Diagnosis from '../../Components/Diagnosis/Diagnosis';

const DiagnosisHome = () => {
  return (
    <Box bg={'neurocare.orange1'} h={'full'}>
      <Diagnosis />
    </Box>
  );
};

export default DiagnosisHome;
