import { Center, Box, Image, FlatList, Pressable } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import data from './Data';

function WellnessScreen() {
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={(item) => (
          <Pressable onPress={() => {}}>
            <Image
              source={{
                uri: item.images[0],
              }}
              alt='Alternate Text'
              size='xs'
            />
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

export default WellnessScreen;
