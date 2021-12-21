import { MotiView } from 'moti';
import { Center } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { Easing } from 'react-native-reanimated';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const _size = 80;
const _color = 'white';
const DiagnosisMotion = () => {
  return (
    <Center
      mx={'auto'}
      w={width * 0.88}
      height={width * 0.47}
      bg={'blue.600'}
      borderRadius={'2xl'}
    >
      <Center w={'80px'} h={'80px'} bg={_color} rounded='full' shadow={'10'}>
        {[...Array(5).keys()].map((index) => {
          return (
            <MotiView
              from={{ opacity: 0.6, scale: 1 }}
              animate={{ opacity: 0, scale: 3 }}
              transition={{
                type: 'timing',
                duration: 4000,
                easing: Easing.out(Easing.ease),
                delay: index * 800,
                repeatReverse: false,
                loop: true,
              }}
              key={index}
              style={[StyleSheet.absoluteFillObject, styles.dot]}
            />
          );
        })}
      </Center>
    </Center>
  );
};
const styles = StyleSheet.create({
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
});

export default DiagnosisMotion;
