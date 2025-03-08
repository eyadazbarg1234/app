import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from 'expo-router'
import { CreateProduct } from '@/res/API'

const AddProduct = () => {
    const Nav = useNavigation()
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [Image, setImage] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');




    const AddProduct = async() => {
        const body = {
            name: name,
            image: Image,
            price: price,
            quantity: quantity,
            category: category
        }
        const response = await CreateProduct(body)
            .then((Response) => {
                if (Response.success)
                    Nav.navigate('eyadss')
                else
                    alert('Problem')
            }).catch((error) => {
                console.log(error)
            })
            console.log("response", response);
            
    }


    return (

        
        
            <View style={styles.products}>
                <Text>name</Text>
                <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="useless placeholder"
            />


            <Text>image</Text>
    <TextInput
    style={styles.input}
    onChangeText={setImage}
    value={Image}
    placeholder="useless placeholder"
    />



<Text>price</Text>
<TextInput
style={styles.input}
onChangeText={setPrice}
value={price}
placeholder="useless placeholder"
/>



<Text>quantity</Text>
<TextInput
style={styles.input}
onChangeText={setQuantity}
value={quantity}
placeholder="useless placeholder"
/>

<Text>category</Text>
<TextInput
style={styles.input}
onChangeText={setCategory}
value={category}
placeholder="useless placeholder"
/>
<TouchableOpacity onPress={AddProduct}>
<Text style={styles.add}>Add Product</Text>
</TouchableOpacity>
    </View>







    )
}

export default AddProduct

const styles = StyleSheet.create({


    products: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },

add:{

    backgroundColor:'orange',
    color:'white',
    padding:10,
    textAlign:'center',
    margin:30,
    borderRadius:10
}



})