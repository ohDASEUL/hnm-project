import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  let { id } = useParams();
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <div className="product-detail-group">
        <img src={product?.img} width="300px" />
        <div className="product-detail-info">
          <div>{product?.title}</div>
          <div>￦{product?.price}</div>
          <div>{product?.choice === true ? "concious choice" : ""}</div>
          <select style={{ width: "150px" }}>
            <option value="" disabled selected>
              사이즈 선택
            </option>
            <option value="1">S</option>
            <option value="2">M</option>
            <option value="3">L</option>
          </select>
          <Button variant="danger" style={{ width: "400px" }}>추가</Button>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailPage;
