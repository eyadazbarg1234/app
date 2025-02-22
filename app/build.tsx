import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import ProductContext from '@/store/ProductContext';

const Build = () => {
    const data = useLocalSearchParams();
    const [quantity, setQuantity] = useState(1);
    const { cart, setCart } = useContext(ProductContext);
    const nav = useNavigation();

    const increaseQuantity = () => setQuantity(quantity + 1);

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const addToCart = () => {
        const myItem = {
            prodId: data.id,
            prodImg: data.img,
            prodPrice: data.price * quantity,
            prodQuantity: quantity,
            prodName: data.name,
        };
        setCart([...cart, myItem]);
        nav.navigate('cart');
    };

    return (
        <View style={styles.container}>
            <View style={styles.descContainer}>
                <Text style={styles.title}>{data.name}</Text>
            </View>

            <Image style={styles.productImage} source={{ uri: data?.image }} />

            <View style={styles.quantityContainer}>
                <Text style={styles.quantityButton} onPress={increaseQuantity}>+</Text>
                <Text style={styles.quantityText}>{quantity}</Text>
                <Text style={styles.quantityButton} onPress={decreaseQuantity}>-</Text>
            </View>

            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>Price: {data.price * quantity}₪</Text>
            </View>

            <TouchableOpacity onPress={addToCart} style={styles.addButton}>
                <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Build;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
        justifyContent: "space-evenly",
        padding: 20,
    },
    descContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: "#333",
    },
    productImage: {
        width: 320,
        height: 280,
        alignSelf: "center",
        borderRadius: 20,
        resizeMode: 'contain',
        backgroundColor: "#fff",
        elevation: 5,
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },
    quantityButton: {
        fontSize: 32,
        color: "#007bff",
        paddingHorizontal: 15,
        fontWeight: "bold",
    },
    quantityText: {
        fontSize: 28,
        fontWeight: "bold",
        marginHorizontal: 10,
    },
    priceContainer: {
        alignItems: 'center',
    },
    priceText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#28a745",
    },
    addButton: {
        backgroundColor: "#007bff",
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        width: "90%",
        alignSelf: 'center',
        elevation: 3,
    },
    addButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});