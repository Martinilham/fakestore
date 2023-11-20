import React, { useEffect, useState } from 'react'

import Navbar from '../element/navbar'


function Tambah() {
    
    const [data,setData] = useState([
        {
            title: '',
            price: '',
            description: '',
            image: '',
            category: ''
        }
    ])



    // useEffect(()=>{
    //     addData().then((respon)=>respon)
    // },[])


    const tambahdata=(e)=>{
        const {name,value} = e.target;
        setData(
            
                {
                    ...data,
                    [name]:value,
                }
            
            )
        
    }

    const masukan=(e)=>{
        e.preventDefault()
        console.log(data)
    }

  return (
    <>
    <Navbar/>
        <form className='container' onSubmit={masukan}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nama</label>
                <input 
                    name='title' 
                    value={data.title} 
                    onChange={tambahdata} 
                    type="text" className="form-control" id="exampleInputEmail1" >

                    </input>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Harga</label>
                <input 
                    name='price' 
                    value={data.price} 
                    onChange={tambahdata} 
                    type="text" className="form-control" id="exampleInputPassword1">

                    </input>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">deskripsi</label>
                <input 
                    name='description' 
                    value={data.description} 
                    onChange={tambahdata} 
                    type="text" className="form-control" id="exampleInputPassword1">

                    </input>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">image</label>
                <input 
                    name='image' 
                    value={data.image} 
                    onChange={tambahdata} 
                    type="text" className="form-control" id="exampleInputPassword1">

                    </input>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">kategori</label>
                <input 
                    name='category' 
                    value={data.category} 
                    onChange={tambahdata} 
                    type="text" className="form-control" id="exampleInputPassword1">

                    </input>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    </>
  )
}
export default Tambah;