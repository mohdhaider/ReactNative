import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

// const HomeScreen = props => {
//
//   return (
//     <View>
//       <Text style={styles.textStyle}>This is home screen</Text>
//       <Button
//       title="Go to components demo"
//       onPress={() =>
//         props.navigation.navigate("Components")
//       }
//       />
//       <Text></Text>
//       <Text></Text>
//       <Text></Text>
//       <Text></Text>
//       <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
//       <Text>Go to list demo</Text>
//       </TouchableOpacity>
//     </View>
//   )
// };

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text style={styles.textStyle}>This is home screen</Text>
      <Button
      title="Go to components demo"
      onPress={() =>
        navigation.navigate("Components")
      }
      />
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
      <Text>Go to list demo</Text>
      </TouchableOpacity>
      <Button
      title="Go to Image Screen"
      onPress={() =>
        navigation.navigate("Images")
      }
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
