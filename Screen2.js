import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Screen2 extends React.Component {
  render() {
    return(
      <View> 
      <Text style={styles.text}>Screen 2</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffaeae',
    marginTop: 250
  }
})