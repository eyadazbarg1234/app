import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import build from './build'
import ProductContext from '@/store/ProductContext'
import Images from '@/assets/images/Images'
import { TouchableOpacity } from 'react-native'
import { router, useNavigation } from 'expo-router';



const cart = () => {

  const { cart, setCart } = useContext(ProductContext)




  const deleteItem = (id) => {
    const newData = cart.filter(item => {
      return item.prodId !== id
    })

    setCart(newData)
  }

  const calcamount = () => {
    var sum = 0
    cart.forEach(element => {
      sum = sum + element.prodPrice
    });
    

    return (
      
      <View style={styles.dsg}>
        <Text style={styles.werr}>Total:{sum }</Text>
      </View>
    )
  }
  const renderCart = () => {

    return cart.map(item => {
      const prid = item.prodId

      console.log(prid);

      return (
        
               
        <View style={styles.cart}>

          <Image style={styles.imgg} source={item.prodImg} />
          <View style={styles.pricee}>
            <Text style={styles.price} >{item.prodPrice}₪</Text>
            <Text style={styles.quan}>Quantity:{item.prodQuantity}</Text>
    
            <TouchableOpacity onPress={() => deleteItem(prid)}>
              <Image style={styles.dele} source={Images.del} />
            </TouchableOpacity>

          </View>
          


          {/* <Button title='delete'/> */}


          {/* <Text style={styles.namee}>{item.prodName}</Text> */}
        </View>
       
      
      )
    })
  }

  return (
    <View style={styles.container}>
      {renderCart()}
       <TouchableOpacity onPress={() =>router.navigate('eyadss')}>
       <Image style={styles.ho} source={Images.home}/> 
       </TouchableOpacity>
      
      {calcamount()}
    </View>
  )
}

export default cart

const styles = StyleSheet.create({

  ho:{
    marginBottom:0,
    width:90,
    height:90,
     marginLeft:320
  },
  container: {
    flex: 1
  },
  werr: {
   
    fontSize:50,
    color:"#300c0c",
    marginLeft:125
  },

  dsg: {
    borderWidth: 0,
    //backgroundColor:"white",
    fontSize: 90,
    width: '100%',
    height: 70,
    position: 'absolute',
    bottom: 10,
    alignSelf:"center",
    

    

  },
  dele: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginLeft: 130,
    marginBottom: 5

  },


  pricee: {
    //  marginRight:30,
    fontSize: 90,
    width: '50%',
    height: '100%',
    //borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imgg: {
    resizeMode: "contain",
    width: '50%',
    height: '100%',
    borderRadius: 90,
    //borderWidth: 1,
    // justifyContent: "center",
    // alignItems: "center"
    // alignItems:"flex-start"

  },
  price: {
    fontSize: 30,
  },
  quan: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    //  marginRight:120,
    fontSize: 0,


  },
  cart: {
    width: '90%',
    height: 100,
    // borderWidth: 1,
    alignSelf: 'center',
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',

    elevation: 5
  }
})