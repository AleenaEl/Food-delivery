// import React from 'react'

import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import './PlaceOrder.css'
import Navbar from "../../components/Navbar/Navbar";

function PlaceOrder() {
    const{getTotalCartAmount}=useContext(StoreContext)
    return (
        <div className="order">
      
      <Navbar/>
    <form className="place-order">
      {/* onSubmit={placeOrder} */}
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            required
            name="firstName"
            // onChange={onChangeHandler}
            // value={data.firstName}
            type="text"
            placeholder="First Name"
          />
          <input
            required
            name="lastName"
            // onChange={onChangeHandler}
            // value={data.lastName}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="emaill"
          required
          name="email"
        //   onChange={onChangeHandler}
        //   value={data.email}
          type="email"
          placeholder="Email address"
        />
        <input
          className="streett"
          required
          name="street"
        //   onChange={onChangeHandler}
        //   value={data.street}
          type="text"
          placeholder="Street"
        />
        <div className="multi-fields">
          <input
            required
            name="city"
            // onChange={onChangeHandler}
            // value={data.city}
            type="text"
            placeholder="City"
          />
          <input
            required
            name="state"
            // onChange={onChangeHandler}
            // value={data.state}
            type="text"
            placeholder="State"
          />
        </div>
        <div className="multi-fields">
          <input
            required
            name="zipcode"
            // onChange={onChangeHandler}
            // value={data.zipcode}
            type="text"
            placeholder="Zip code"
          />
          <input
            required
            name="country"
            // onChange={onChangeHandler}
            // value={data.country}
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="phonee"
          required
          name="phone"
        //   onChange={onChangeHandler}
        //   value={data.phone}
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
      </div>
  );
}

export default PlaceOrder