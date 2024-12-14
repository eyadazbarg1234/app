import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
import { TOUCHABLE_STATE } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable'
import ProductContext from '@/store/ProductContext'
import ProdactItem from '@/components/ProdactItem';
import ScreenNames from '@/components/ScreenNames';
import { setBackgroundColorAsync } from 'expo-system-ui'


const build = () => {
    const data = useLocalSearchParams()

    const [quantity, setQuantity] = useState(1)
    const { cart , setCart } = useContext(ProductContext)

    const nav = useNavigation();

    


    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }
    const minoyQuantity = () => {
        if (quantity <= 1) {
            setQuantity(1)
        } else {
            setQuantity(quantity - 1)
        }
    }

    const addtoCart = () => {
        const myItem = {
           prodId : data.id, 
           prodImg : data.img,
           prodPrice : data.price * quantity,
           prodQuantity:quantity ,
           prodName:data.name
        }
        const newCart = cart;
        newCart.push(myItem);
    //    console.log(newCart);
        setCart([...newCart]);
        nav.navigate('cart')
    }

    return (
        <View style={styles.atk}>
            {/* <Text style={styles.frw}>TEyad</Text> */}
            <View style={styles.desc}>
                <Text style={styles.ssf}>{data.name}</Text>    
            </View>
            

            <Image style={styles.egwf} source={data.img} />
            

            <View style={styles.hdg}>
                {/* <Button  title='+' onPress={increaseQuantity} /> */}
                <Text style={styles.pluss} onPress={increaseQuantity}>+</Text>
                <Text style={styles.gjhf}>{quantity}</Text>
                <Text style={styles.minuss} onPress={minoyQuantity}>-</Text>
                {/* <Button title='-' onPress={minoyQuantity} /> */}
            </View>

            <View style={styles.saf}>
                <Text style={styles.retf}>price:{data.price * quantity}₪</Text>

            </View>
            
              <TouchableOpacity onPress={addtoCart}>
            <View style={styles.ert}>
                    <Text style={styles.mar}>add to cart</Text>
            </View>
            </TouchableOpacity>

        </View>


    )

}
export default build

const styles = StyleSheet.create({
    
    ert: {
        borderWidth: 4,
        borderColor: "#F194FF",
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 13,
        elevation: 1,
        width: "90%",
        alignSelf: 'center',
    },
    mar: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    ssf:{

    },

    pluss: {
        // marginTop:15,
        fontSize: 20,
        justifyContent: "center"
    },

    minuss: {
        // marginTop:15,
        fontSize: 20,
        justifyContent: "center"
    },

    atk: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-evenly",
        // alignItems: 'center',
    },
    // frw: {
    //     marginTop: 30,
    //     marginLeft: 185
    // },
    egwf: {
        width: 350,
        height: 300,
        //flexDirection:"row",
        marginTop: 70,
        marginLeft: 35,
        borderRadius: 30,
        resizeMode: 'contain',
        //backgroundColor:"brown"
    },
    retf: {
        fontSize: 25
    },
    saf: {

        alignItems: 'center',

    },
    gjhf: {
        fontSize: 35,


    },
    hdg: {
        justifyContent: "center",
        fontSize: 90,
        //justifyContent: "space-between",
        marginTop: -10,
        //flexDirection:"row",
        alignItems: "center",
    },
    gjhfHammer: {
        width: 30,
        height: 30

    },

    desc: {
        // borderWidth: 1,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
})