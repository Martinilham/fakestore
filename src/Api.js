import axios from "axios";

 
export const Api = async ()=>{
    const product = await axios.get(`https://fakestoreapi.com/products`)
    return product.data;
}

export const recom5 = async (api)=>{
    const product = await axios.get(`https://fakestoreapi.com/products${api}`)
    return product.data;
}

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