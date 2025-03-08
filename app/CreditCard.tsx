import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { CreditCardInput, CreditCardView } from 'react-native-credit-card-input'

const CreditCard = () => {
    const [name, setname] = useState('')
    return (
        <View style={styles.container}>
            <CreditCardInput />
            <Text style={styles.text}>Name</Text>
            <TextInput
                value={name}
                onChangeText={setname}
                placeholder='name'
                style={styles.input}

            />
            <CreditCardView />
        </View>
    )
}

export default CreditCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'

    },
    input: {
        height: 40,
        width: 200,
        borderWidth: 1,
        borderColor: 'black',
        margin: 10
    },
    text: {
        fontSize: 16,
        // fontWeight: 'bold'
        // alignSelf: 'flex-start',
        width:"50%"
    }
})