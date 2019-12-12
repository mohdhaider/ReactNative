import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail'

let ImageScreen = props => {

  console.log(props);

  return (
    <View>
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
    </View>
  )
}

let styles = StyleSheet.create({
  firstStyle: {
    fontSize: 45
  },
  secondStyle: {
    fontSize: 20
  }
})

export default ImageScreen
