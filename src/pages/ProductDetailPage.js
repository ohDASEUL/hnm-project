import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  let { id } = useParams();
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/ohDASEUL/hnm-project//products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-detail-img">
          <img src={product?.img} width="300px" />
        </Col>
        <Col className="product-detail-info">
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
          <Button variant="danger" className="product-detail-btn">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;
