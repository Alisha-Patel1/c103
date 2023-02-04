import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default class Screen1 extends React.Component {
  render(){
    return(
      <View>
      <Text style={styles.text}>Screen 1</Text>
      <TouchableOpacity style={styles.button}
      onPress={() => this.props.navigation.navigate("Screen2")}>Go to Screen 2</TouchableOpacity>
      <Image source={require('./assets/snack-icon.png')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
text: {
  color: '#ffa5a5',
  fontSize: 25,
  textAlign: 'center',
  justifyContent: 'center'
 
},
button: {
  textAlign: 'center',
  justifyContent: "center",
  marginTop: 20,
  borderWidth: 2,
  width: 333,
  backgroundColor: '#ffaeae',
  padding: 5

}
})