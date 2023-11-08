import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Api, recomm } from "../Api";
import Card from "../components/Card";

const Home = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        recomm('?limit=3').then((respon)=>{
            setData(respon)
        })
    },[])

    const recommend = ()=>{
        return (
            <>
            {data.map((e)=>(
                <Card judul={e.judul} deskripsi={e.description}/>
            ))}
            </>
        )
    }

    console.log(data)
    return(
        <div className="container mx-auto">
            <Navbar />
            {recommend()}
        </div>
        
    )
}

export default Home;