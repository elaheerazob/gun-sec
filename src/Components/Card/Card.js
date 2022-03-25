import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Card.css";


const Card = ({data,buttonAddtoCard}) => {
// console.log(data);
const {img,name,action,bullet,price} =data

  return (
    <div className="card">
    <div className="image-container">
      <img src={img} alt="" />
    </div>
    <h2>Name :{name}</h2>
    <p>Action :{action}</p>
    <p>Bullet :{bullet}</p>
    <div className="add-to-cart">
      <button onClick={() => buttonAddtoCard(data)} className="icon"> 
      <FontAwesomeIcon icon={faShoppingCart} />
      </button>
      <h1>Prices : {price}</h1>
    </div>
    </div>
  );
};

export default Card;
