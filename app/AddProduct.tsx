import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from 'expo-router'
import { createProductFromServer } from '@/res/API'

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
        const response = await createProductFromServer(body)
            .then((Response) => {
                if (Response.success == true)
                    Nav.navigate('eyadss')
                else
                    alert('Problem')
            }).catch((error) => {
                console.log(error)
            })
            console.log("response", response);
            
    }


    return (
        <View>
            <Text>AddProduct</Text>
        </View>


    )
}

export default AddProduct

const styles = StyleSheet.create({})