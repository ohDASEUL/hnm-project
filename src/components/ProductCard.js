import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item, authenticate }) => {
  const navigate = useNavigate();
  const goProductDetail = () => {
    if (authenticate) {
      navigate(`/product/${item.id}`);
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="card-section" onClick={goProductDetail}>
      <img src={item?.img} width="300px" alt={item?.title} />
      <div>{item?.choice === true ? "concious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};
export default ProductCard;
