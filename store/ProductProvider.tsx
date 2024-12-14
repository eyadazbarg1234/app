import React, { useState } from "react";
import ProductContext from "./ProductContext";


const ProductProvider = (props: any) => {
    const [number,setNumber] = useState()
    
   const [cart,setCart] = useState([])

    return (
        <ProductContext.Provider
        value={{
            number,
            setNumber,
            cart,
            setCart
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductProvider;