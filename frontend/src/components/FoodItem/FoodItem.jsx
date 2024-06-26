/* eslint-disable react/prop-types */
// import React from 'react'
import { useContext } from "react";

import "./FoodItem.css"
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

function FoodItem({ id, name, price, description, image }) {
    const { cartItems, addToCart, removeFromCart } =useContext(StoreContext);
    return (
      <div className="food-item  rounded">
        <div className="food-item-img-container">
          <img className="food-item-image" src={image} alt="" />
          {!cartItems[id] ? (
            <img
              className="add"
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
              alt=""
            />
          ) : (
            <div className="food-item-counter px-1 ">
              <img
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt=""
              />
              <p className="cartitemsp ">{cartItems[id]}</p>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          )}
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p className="namewe">{name}</p>
            <img className="ratingstars" src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price " style={{ color: "#FF574A" }}>
            ${price}
          </p>
        </div>
      </div>
    );
}

export default FoodItem