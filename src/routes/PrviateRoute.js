import React from 'react'
import ProductDetailPage from '../pages/ProductDetailPage'
import { Navigate } from 'react-router-dom'

const PrviateRoute = ({authenticate}) => {
  return authenticate === true?<ProductDetailPage/>:<Navigate to="/login"/>
}

export default PrviateRoute