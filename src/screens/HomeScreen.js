import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Hi There!</Text>
      <Button
        title = "Go to Components Demo"
        onPress = {() => console.log('Components button pressed')}
      />
      <TouchableOpacity onPress = {() => console.log('List button pressed')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default HomeScreen;
