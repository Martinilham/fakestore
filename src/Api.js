import axios from "axios";

 
export const Api = async ()=>{
    const product = await axios.get(`https://fakestoreapi.com/products`)
    return product.data;
}

export const recomm = async (api)=>{
    const product = await axios.get(`https://fakestoreapi.com/products${api}`)
    return product.data;
}