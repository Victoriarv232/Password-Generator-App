import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatLogoStyles';
import images from "../Images"


export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>
            BAT PASSWORD GENERATOR
        </Text>
        <Image 
        source = {images.logo}
        style ={{
          resizeMode: 'contain',
          height: 180
        }}
        />
    </>
  );
}