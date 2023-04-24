import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#100F17',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#FFF',
    fontSize: 34
  }
})

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Stokr</Text>
    </View>
  )
}

export default Header
