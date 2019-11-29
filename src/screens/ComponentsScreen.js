import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

let ComponentsScreen = props => {

  console.log(props);

  let firstFont = styles.firstStyle
  let first = <Text style={firstFont}>Greting started with react native!</Text>

  let secondFont = styles.secondStyle
  let name = 'Mohd Haider'
  let second = <Text style={secondFont}>My name is {name}</Text>

  return (
    <View>
       {first}
       {second}
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

export default ComponentsScreen
