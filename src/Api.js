import axios from "axios";

const url = process.env.REACT_APP_BASE_URL
export const Api = async ()=>{
    const product = await axios.get(`${url}products`)
    return product.data;
}

export const authLogin = async (login)=>{
    const loginUser = await axios.post(`${url}auth/login`,login)
    return loginUser.data
} 
// export const recom5 = async (api)=>{
//     const product = await axios.get(`${process.env.REACT_APP_BASE_URL}products${api}`)
//     return product.data;
// }

// export const addData = async ()=>{
//     const TambahData = await axios.post('https://fakestoreapi.com/products',{
//                     title: '',
//                     price: '',
//                     description: '',
//                     image: '',
//                     category: ''
//     })
//     return TambahData.data;


// }