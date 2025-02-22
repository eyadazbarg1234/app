import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import ProductContext from '@/store/ProductContext'
import { Ionicons } from '@expo/vector-icons';

const edit = () => {
  const { user } = useContext(ProductContext);
  const [name, setName] = useState(user?.userName);
  const [phone, setPhone] = useState(user?.phone );
  const [email, setEmail] = useState(user?.email );
  return (

    <View>
      <View style={styles.ion}>


      <Ionicons style={styles.ione} name='person-circle-outline' size={130} color={'#590e0e'} />
      </View>
        <Text style={styles.e}>change profile</Text>

      <View style={styles.nam}>
        <Text style={styles.name}>UserName</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChange={setName}
        />


        <Text style={styles.name}>Phone</Text>
        <TextInput 
         style={styles.input} 
         value={phone}
         onChange={setPhone}
         />


        <Text style={styles.name}>Email</Text>
        <TextInput 
         style={styles.input} 
         value={email}
         onChange={setEmail}
         />

      </View>



    </View>



  )
}

export default edit

const styles = StyleSheet.create({

  e: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 70,
  },

  ion: {
    alignItems: "center",
    borderRadius: 20,
    width: 120,
    alignSelf: "center",
    marginTop: 30,
  },


  name: {
    marginTop: 20,
    fontSize: 16,
    color: "black",
    marginLeft: 20,
  },
  nam: {

    marginTop: 20,
    // marginLeft: 20,
    // marginRight: 20,
    // borderColor: "black",
    // borderRadius: 10,
    // padding: 10,
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    // marginBottom: 10,
  },




  input: {
    borderWidth: 1,
    width: 330,
    height: 50,
    margin: "auto",
    borderRadius: 13,
    marginTop:10

  }















})
