import React, { useEffect, useState } from 'react'
// import { Image } from "antd";
import { useParams } from 'react-router'

export default function ProductDetail() {
    const { id } = useParams()

    const [product , setProduct] = useState([])
    console.log("product ==> ", product);
    console.log("id ==> ", id);
    

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct({data})
            console.log('data singl product', data);
            
        });
    },[])
    
  return (
    <>
   <div>
    <h1> 
        Product id : 
    </h1>
   </div>
    </>
  )
}
