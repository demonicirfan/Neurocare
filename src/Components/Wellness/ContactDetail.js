import { Center } from 'native-base';
import React from 'react';
import Header from './Header';

const ContactDetail = (route) => {
  console.warn(route);
  return (
    <Center>
      <Header />
      {/* <SectionList
        sections={props.images}
        renderItem={(item, index) => (
          <Image
            source={{
              uri: item[index],
            }}
            alt='Alternate Text'
            size='xl'
          />
        )}
      /> */}
    </Center>
  );
};

export default ContactDetail;
