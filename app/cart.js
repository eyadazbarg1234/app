import React, { useContext } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import ProductContext from "@/store/ProductContext";
import Images from "@/assets/images/Images";

const Cart = () => {
  const { cart, setCart } = useContext(ProductContext);
  const fadeAnim = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.prodId !== id));
  };

  const calcAmount = () => {
    const total = cart.reduce((sum, item) => sum + item.prodPrice, 0);
    return (
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: {total}₪</Text>
      </View>
    );
  };

  const renderCart = () =>
    cart.map((item) => (
      <Animated.View
        key={item.prodId}
        style={[styles.cartItem, { opacity: fadeAnim }]}
      >
        <Image style={styles.itemImage} source={item.prodImg} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemPrice}>{item.prodPrice}₪</Text>
          <Text style={styles.itemQuantity}>Quantity: {item.prodQuantity}</Text>
          <TouchableOpacity onPress={() => deleteItem(item.prodId)}>
            <Image style={styles.deleteIcon} source={Images.del} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    ));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🛒 Your Cart</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {cart.length > 0 ? renderCart() : <Text style={styles.emptyCart}>Your cart is empty</Text>}
      </ScrollView>
      {cart.length > 0 && calcAmount()}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7fc",
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#444",
    marginBottom: 15,
  },
  emptyCart: {
    textAlign: "center",
    fontSize: 18,
    color: "#888",
    marginTop: 50,
  },
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 3, height: 3 },
    elevation: 5,
  },
  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 15,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  itemQuantity: {
    fontSize: 16,
    color: "#666",
  },
  deleteIcon: {
    width: 26,
    height: 26,
    marginTop: 5,
  },
  totalContainer: {
    backgroundColor: "#4CAF50",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    elevation: 3,
  },
  totalText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
});
