import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

let ImageDetail = ({imageSource, title, ratings}) => {

  //console.log("Image Detail props")
  //console.log(props)

  return (
    <View>
      <Image source={imageSource}/>
      <Text>{title}</Text>
      <Text>Image Score - {ratings}</Text>
    </View>
  )
};

let styles = StyleSheet.create({
  firstStyle: {
    fontSize: 20
  }
});

export default ImageDetail;
