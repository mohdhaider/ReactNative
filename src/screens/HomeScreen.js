import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Hi There!</Text>
      <Button
        title = "Go to Components Demo"
        onPress = {() => console.log('Components button pressed')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default HomeScreen;
