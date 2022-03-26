import React from "react";
import "./Card.css";
import { BsFillCartFill } from "react-icons/bs";

const Card = (props) => {
  const { name, img, price, id } = props.gun;

  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <div className="gun-info">
        <h1>{name}</h1>
      </div>
      <div className="add-to-cart">
        <button onClick={() => props.handleAddToCart(props.gun)}>
          <BsFillCartFill className="icon" />
        </button>
        <h1>$ {price}</h1>
      </div>
    </div>
  );
};

export default Card;
