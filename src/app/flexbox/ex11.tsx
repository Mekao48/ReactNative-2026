import React from 'react';
import { View } from 'react-native';

export default function Ex11() {
  return ( 
    <View style={{ flex : 1 , flexDirection : 'column', justifyContent : 'space-between' }}>
      <View style={{ backgroundColor : '#50E3C2' ,flex: 1}}></View>
      <View style={{ backgroundColor : '#3a1a58' ,flex: 1}}></View>
    </View>
  );
}
