import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProdactItem = (props: any) => {
  return (
    <View style={styles.rte}>
      <Image style={styles.rfdr} source={{ uri: props.image }} />
      {/* <Text>{props.price}</Text> */}
      <View style={styles.description}>
        <Text style={styles.ett}>{props.name}</Text>
      </View>

      {/* <Text>{props.quantity}</Text> */}
    </View>
  )
}

export default ProdactItem

const styles = StyleSheet.create({
  rfdr: {
    width: 210,
    height: 230,
    resizeMode: "contain",


  },
  rte: {
    flexDirection: "row",
    alignItems: "center",

  },
  ett: {
    marginBottom: 70,
  },
  description: {
    width: 190,
  }
})