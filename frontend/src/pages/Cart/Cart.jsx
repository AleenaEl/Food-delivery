/* eslint-disable react/jsx-key */

import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import './Cart.css'
import Navbar from "../../components/Navbar/Navbar";
import toast from "react-hot-toast";




// import React from 'react'

function Cart() {
    const navigate=useNavigate()
    const { cartItems, food_list, removeFromCart, getTotalCartAmount,url } =
      useContext(StoreContext);
  console.log(cartItems);
  const isCartEmpty = Object.values(cartItems).every((qty) => qty <= 0);
  const checkout = () => {
    if (localStorage.getItem("token")) {
      
      navigate("/order");
    } else {
      toast.error("please login first ")
    }
  }
    return (
      <>
        <div className="cart">
          {/* <Navbar /> */}
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {isCartEmpty ? (
              <p className="cart-empty">
                Your Cart is empty ..Fill it with our tasty menu..
              </p>
            ) : (
                
              food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div>
                    <div
                      key={index}
                      className="cart-items-title cart-items-item"
                    >
                      {/* url + "/images/" + */}
                      <img src={url + "/images/" + item.image} alt="" />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>${item.price * cartItems[item._id]}</p>
                      <p
                        onClick={() => removeFromCart(item._id)}
                        className="cross"
                      >
                        x
                      </p>
                    </div>
                    <hr />
                  </div>
                );
              } 
              })
            )}
            {/* {
            } */}
          </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  {/* getTotalCartAmount() */}
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  {/* getTotalCartAmount() === 0 ? 0 : */}
                  <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>
                    {/* getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2 */}
                    ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                  </b>
                </div>
              </div>
              <button className="checkout" onClick={checkout} disabled={isCartEmpty}>
                PROCEED TO CHECKOUT
              </button>
            </div>
            <div className="cart-promocode">
              <div>
                <p className="promocodep">
                  If you have a promo code, Enter it here
                </p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder="Promo Code" />
                  <button style={{ color: "#FF574A " }}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Cart