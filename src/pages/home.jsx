import React, { useEffect, useState } from 'react'
import { Api, addData } from '../Api'
import Navbar from '../element/navbar'

function Home() {
    const [product,setProduct] = useState([])

    useEffect(()=>{
        Api().then((respon)=>setProduct(respon))
    },[])

    const [tambahdata,setdata] = useState([])

    useEffect(()=>{
        addData().then((respon)=>setdata([respon]))
    },[])

    console.log(product)
    console.log(tambahdata)
  return (
    <>
    <Navbar/>
    <div className='row'>
        {product.map((e)=>(
            <div className='col-2'>
                <div className='row mb-5'>
                <div className="card col-12" style={{width: '18rem'}}>
                        <img src={e.image} className="card-img-top" alt="..." style={{width: '12rem',height: '12rem'}}></img>
                        <div className="card-body col-12 d-flex flex-column align-item-center">
                        <h5 className="card-title">{e.title.substr(0,20)}</h5>
                        <button className='btn btn-primary'>Add Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        {tambahdata.map((q)=>(
            <div className='col-2'>
            <div className='row mb-5'>
            <div className="card col-12" style={{width: '18rem'}}>
                    <img src={q.image} className="card-img-top" alt="..." style={{width: '12rem',height: '12rem'}}></img>
                    <div className="card-body col-12 d-flex flex-column align-item-center">
                    <h5 className="card-title">{q.title.substr(0,20)}</h5>
                    <button className='btn btn-primary'>Add Cart</button>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </div>
    </>
  )
}
export default Home;