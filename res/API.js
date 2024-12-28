import { Route } from "expo-router/build/Route"

export const baseUrl = "https://app-server-cxx6.onrender.com"

export const fetchApi = async (router, method, body) => {
    const url = baseUrl + router;
    return await fetch(url, {
        method: method || 'Get',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,

    }).then(res => res.json())
    .catch((error) => {
        console.error("fetch Error", error?.message);
    });
}

export const checkRespond = async () => {
    const 
}
    