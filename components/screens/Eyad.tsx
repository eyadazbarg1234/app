import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import eyadss from '@/app/eyadss'


const Eyad = () => {
    const nav = useNavigation()

    setTimeout(() => {
     nav.navigate("eyadss");
    },);

    return (
            <View style={styles.ret}>
            <SafeAreaView>
        <View>        
            <Text style={styles.fncs}>Eyadop</Text>
        </View>

        <View>
        <TouchableOpacity onPress={() => {nav.navigate("eyadss") }}>
        <Text style={styles.shora}>eyaddg</Text>
        </TouchableOpacity>
        </View>
        </SafeAreaView>
    </View>
       
    )
}

export default Eyad

const styles = StyleSheet.create({
    ret:{
        flex: 1,
        backgroundColor:"blue"
    },
    fncs: {
        margin:175,
        marginTop:350
     },
    shora:{
        margin:90,
        color:"black",
    }

})