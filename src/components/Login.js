import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Login extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Login Component </Text>
        <TouchableOpacity onPress={Actions.signup} style={styles.button}>
          <Text> Sign Up </Text>
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
    backgroundColor: 'lightgreen'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
})
