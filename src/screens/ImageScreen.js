import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

let ImageScreen = props => {

  console.log(props);

  let firstFont = styles.firstStyle
  let first = <Text style={firstFont}>Images Screen</Text>

  return (
    <View>
       {first}
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
