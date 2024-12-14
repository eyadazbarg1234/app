import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Images from '@/assets/images/Images'

const WhatsappItem = (props: any) => {
  return (

    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.pic} source={props.img} />

        <View>
          <Text style={styles.time}>{props.time}</Text>
          <Text style={styles.name}>{props.name}</Text>

          <Text style={styles.message}>{props.message}</Text>


        </View>

      </View>
    </View>
  )
}

export default WhatsappItem

const styles = StyleSheet.create({
  name: {
    color: "black",
    // marginLeft:60,
    marginBottom: 30,
    marginLeft:50,
  },

  fcb: {
    height: 49,
    width: 49,
    flexDirection: "row",
    borderRadius: 40,
    bottom: -20,
  },
  cont: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 50,

  },
  falcon: {
    height: 39,
    width: 39,
    flexDirection: "row",
    borderRadius: 40,
  },
  card: {
    flexDirection: 'row',


  },
  container: {
  },
  time: {
    marginLeft: 320,

  },
  pic: {
marginBottom:80,
  },
  message: {
marginLeft:50,
marginBottom:70,
  },
})