import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import ProdactItem from '@/components/ProdactItem';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import ProductContext from '@/store/ProductContext';

const profile = () => {
  const nav = useNavigation();
  const { user } = useContext(ProductContext)
  return (
    <View>
      <View style={styles.ion}>
        <Ionicons style={styles.ione} name='person-circle-outline' size={130} color={'#590e0e'} />
      </View>
      <View style={styles.info}>
        <Text style={styles.editl}>{user?.userName || "name"}</Text>
        <Text style={styles.editl}>{user?.phone || "phone"}</Text>
        <Text style={styles.editl}>{user?.email || "email"}</Text>
      </View>
      <TouchableOpacity onPress={() => nav.navigate('edit')}>
        <View style={styles.editp}>
          <Text style={styles.edit}>Edit profile</Text>

        </View>
      </TouchableOpacity>





      <View style={styles.Logout}>
        <Text style={styles.Log}>Logout</Text>
      </View>
    </View>

    // {/* <TouchableOpacity>
    //   <View>
    //   <Text style={styles.touch}>Name</Text>


    //   </View>
    //   </TouchableOpacity>


    //   <TouchableOpacity>
    //   <View>
    //   <Text style={styles.touch}>UserName</Text>
    //    </View>
    //    </TouchableOpacity>
    //    */}

  )
}

export default profile

const styles = StyleSheet.create({
  info: {
    marginTop: 40,
    alignItems: "center",
    
    
   
  },
  Logout: {
    borderWidth: 3,
    borderColor: "red",
    padding: 15,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    marginTop: 300,
    borderRadius: 30,
    alignSelf: "center",
  },
  editl: {
    fontSize: 20,
    marginBottom: 10,
    color:"#590e0e"
    
  },

  editp: {
    borderWidth: 1,
    height: 40,
    width: 110,
    marginTop: 30,
    borderRadius: 10,
    alignSelf: "center",
  },

  edit: {
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },

  ion: {
    alignItems: "center",
    borderRadius: 20,
    width: 120,
    alignSelf: "center",
    marginTop: 30,
  },

  Log: {
    color: "red",
    fontWeight: "bold",
    fontSize: 19,
    textAlign: "center",
  },
});

