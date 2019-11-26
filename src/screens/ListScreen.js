import React from 'react'
import {Text, StyleSheet, View, FlatList} from 'react-native'

let ListScreen = () => {

  let friends = [
    {name: 'Friend #1', age: '1', key:'1'},
    {name: 'Friend #2', age: '2', key:'2'},
    {name: 'Friend #3', age: '3', key:'3'},
    {name: 'Friend #4', age: '4', key:'4'},
    {name: 'Friend #5', age: '5', key:'5'},
    {name: 'Friend #6', age: '6', key:'6'},
    {name: 'Friend #7', age: '7', key:'7'},
    {name: 'Friend #8', age: '8', key:'8'},
    {name: 'Friend #9', age: '9', key:'9'}
  ]

  return (
    <FlatList
    horizontal={false}
    showsHorizontalScrollIndicator={false}
    showVerticalScrollIndicator={false}
    keyExtractor={item => item.key}
    data={friends}
    renderItem={({item}) => {
      return <Text style={styles.firstStyle}>{item.name} - Age {item.age}</Text>
    }}
    />
  )
}

let styles = StyleSheet.create({
  firstStyle: {
    fontSize: 20,
    marginVertical: 20,
    marginHorizontal:50
  }
})

export default ListScreen
