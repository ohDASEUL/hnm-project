import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAllPage = () => {
  
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get('q')
    console.log('쿼리값',searchQuery);
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAllPage;

