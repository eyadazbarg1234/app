import { Route } from "expo-router/build/Route"
export const baseUrl = "https://app-server-cxx6.onrender.com"

export const loginUser = async (body )=>{
    const url = "/loginUser" ;
    console.log(body);
    return await fetchApi (url, "POST", (body));
    
};
export const getAllProducts = async () => {
    const url = "/getAllProducts";  // Get all products endpoint
    return await fetchApi(url, 'GET');  // No body needed for GET request
  };

export const CreateUser = async (body )=>{
    const url = "/createUser" ;
    console.log(body);
    return await fetchApi (url, "POST", body)
    
};

export const CreateProduct = async (body )=>{
    const url = "/createProduct" ;
    console.log(body);
    return await fetchApi (url, "POST", body)
    
}




export const  fetchApi = async (route, method, body )=> {
    const url = baseUrl+route;
    return await fetch (url,{
        method:method || 'GET',
        headers:{
            'content-Type':'application/json'
        
        },
        body: body ? JSON.stringify(body) : null,
    }).then(res=>res.json())
    .catch((error)=>{
        console.error("fetch Error", error?.message);
        
       });
    }









