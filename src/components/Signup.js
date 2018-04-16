import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Signup extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Signup Component </Text>
        <TouchableOpacity onPress={Actions.pop} style={styles.button}>
          <Text> Login </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightpink'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
})
