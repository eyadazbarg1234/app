import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import ProductProvider from '@/store/ProductProvider'

const _layout = () => {
  return (
    <ProductProvider>
      <Stack />
    </ProductProvider>
  )
}

export default _layout

const styles = StyleSheet.create({})
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Stack } from 'expo-router'
// import ScreenNames from '@/components/ScreenNames'
// import ProductProvider from '@/store/ProductProvider'


// const _layout = () => {
//   return (
//     <ProductProvider>
//       <Stack screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="index" />
//         <Stack.Screen name={ScreenNames.Home} />
//         <Stack.Screen name={ScreenNames.book} />
//         <Stack.Screen name={ScreenNames.tools} />
//         <Stack.Screen name={ScreenNames.build} />
//         <Stack.Screen name={ScreenNames.Gaming} />
//         <Stack.Screen name={ScreenNames.cart}/>
//       
//       </Stack>
//     </ProductProvider>
//   )
// }

// export default _layout

// const styles = StyleSheet.create({})