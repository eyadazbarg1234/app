import React, { useContext, useEffect, useState } from "react";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
} from "react-native";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Images from "@/assets/images/Images";
import ScreenNames from "@/components/ScreenNames";
import data from "@/assets/data";
import ProdactItem from "@/components/ProdactItem";
import ProductContext from "@/store/ProductContext";
import { getAllProducts } from "@/res/API";

const Eyadss = () => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const nav = useNavigation();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null)
  const { user } = useContext(ProductContext);
const goToAddProduct = () => {
    nav.navigate('AddProduct');
}
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        console.log(response.data);
        setProducts(response.data || []);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);
  useEffect(() => {
    nav.setOptions({
      title: user?.userName,
    });

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const renderProducts = () =>
    products.filter((value) => category ? value.category == category : value).map((val, index) => (
      <TouchableOpacity key={index} onPress={() => nav.navigate(ScreenNames.build, val)}>
        <Animated.View style={[styles.productContainer, { opacity: fadeAnim }]}>
          <ProdactItem {...val} />
        </Animated.View>
      </TouchableOpacity>
    ));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => nav.navigate("cart")} style={styles.cartContainer}>
            <Image style={styles.cartIcon} source={Images.adfds} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate("profile")} style={styles.profileIcon}>
            <Ionicons name="person-circle-outline" size={40} color="black" />
          </TouchableOpacity>
        </View>

        {/* Section Titles */}
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => setCategory(() => category == "tools" ? null : 'tools')}
            style={[styles.section, category == 'tools' && { borderWidth: 2, borderColor: "blue" }]} >
            <Text style={styles.sectionTitle}>🛠 Build Tools</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setCategory(() => category == "gaming" ? null : 'gaming')}
            style={[styles.section, category == 'gaming' && { borderWidth: 2, borderColor: "blue" }]} >
            <Text style={styles.sectionTitle}>🎮 Gaming</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => setCategory(() => category == "clothes" ? null : 'clothes')}
            style={[styles.section, category == 'clothes' && { borderWidth: 2, borderColor: "blue" }]} >
            <Text style={styles.sectionTitle}>👕 Clothes</Text>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={goToAddProduct}>

          <FontAwesome6 name="add" size={24} color="black" />
          </TouchableOpacity>

        </View>

        {/* Product List */}
        {renderProducts()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Eyadss;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#f4f7fc",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
backgroundColor:'white',
    padding: 1,
    borderRadius: 10,
  },
  cartContainer: {
    padding: 10,
  },
  cartIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  profileIcon: {
    padding: 10,
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#444",
  },
  productContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 3, height: 3 },
    elevation: 5,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  }
  // profileIcon:{

  // },
});
