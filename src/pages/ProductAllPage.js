import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

const ProductAllPage = () => {
  const [productList, setProductList] = useState([]);
  const getProducts= async()=>{
    let url = `http://localhost:5000/products`
    let res = await fetch(url);
    let data = await res.json()
    setProductList(data)
  }
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div>
        <ProductCard/>
    </div>
  )
}

export default ProductAllPage