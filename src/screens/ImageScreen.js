import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail'

let ImageScreen = props => {

  //console.log(props);

  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require('../../assets/forest.jpg')}
        ratings="1"
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../../assets/beach.jpg')}
        ratings="2"
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/mountain.jpg')}
        ratings="3"
      />
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
