import React from 'react'
import {StyleSheet, Text, Dimensions, TouchableHighlight, View} from 'react-native'

const styles = StyleSheet.create({
  display: {
    flex: 1,
    justifyContent:'center',
    padding: 20,
    backgroundColor:'#4282AF',
    alignItems: 'flex-end' 
  },
  displayValue: {
    fontSize: 60,
    color: '#ffffff',
    }
})

export default props => {
  return( 
    <View style={styles.display}>
        <Text 
              style={styles.displayValue}
              numberOfLines={1}>{props.value}
        </Text>
    </View>
  )
}