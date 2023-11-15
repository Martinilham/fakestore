import React, { useEffect, useState } from 'react'
import { Api } from '../Api'
import { dataCart } from './cart'

function Home() {
    const [product,setProduct] = useState([])

    useEffect(()=>{
        Api().then((respon)=>setProduct(respon))
    },[])
    
    const [dataKeranjang,setDataKeranjang] = useState([
        {
            id:1,
            jml:1
        }
    ])
    const eventClick =(id,title)=>{
        setDataKeranjang(
            [...dataKeranjang,
                {
                    id:id,
                    jml:1,
                    nama:title
                }
            ]
            )
    }



  return (
    <div className='row'>
        {product.map((e)=>(
            <div className='col-2'>
                <div className='row mb-5'>
                <div className="card col-12" style={{width: '18rem'}}>
                        <img src={e.image} className="card-img-top" alt="..." style={{width: '12rem',height: '12rem'}}></img>
                        <div className="card-body col-12 d-flex flex-column align-item-center">
                        <h5 className="card-title">{e.title.substr(0,20)}</h5>
                        <button onClick={()=>eventClick(e.id,e.title)} className='btn btn-primary'>Add Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        {dataKeranjang.map((q)=>(
            <div>
                <p>{q.nama}</p>
            </div>
        ))}
    </div>
  )
}
export default Home;