import React, { useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

let CounterScreen = () => {

  const [counter, setCounter] = useState(0)

  return (
    <View>
      <Button
        title = "Increase"
        onPress = { () => {
          setCounter(counter + 1)
        }}
      />
      <Button
        title = "Decrease"
        onPress = { () => {
          setCounter(counter - 1)
        }}
      />
      <Text style={styles.firstStyle}>Current counter: {counter}</Text>
    </View>
  )
}

let styles = StyleSheet.create({

  firstStyle:{
    fontSize: 15
  }
});

export default CounterScreen;
