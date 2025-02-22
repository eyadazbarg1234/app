import React, { useState } from "react";
import ProductContext from "./ProductContext";


const ProductProvider = (props: any) => {
    const [number,setNumber] = useState()
    
   const [cart,setCart] = useState([])
   const [user,setUser] = useState()

    return (
        <ProductContext.Provider
        value={{
            number,
            setNumber,
            cart,
            setCart,
            user,setUser
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductProvider;