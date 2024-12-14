import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Images from '@/assets/images/Images'
import data from '@/assets/data';

const Gaming = () => {
  return (
    <View style={styles.fshd}>
      {/* <Text>Gaming</Text> */}
      <Image style={styles.rjg} source={Images.swsw}/>
    </View>
  )
}

export default Gaming

const styles = StyleSheet.create({

rjg:{
  height:300,
  width:300,
resizeMode:"contain"


},
fshd:{
  backgroundColor:"white",
}









})