/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// import React from 'react'
import { useState } from 'react';
import './SignUp.css'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';
import toast from 'react-hot-toast';
import axios from "axios"
import { SERVER_URL } from '../../Services/server_url';

function SignUp({setSideBar,setHorizontal}) {
  
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();
    const { admin, setAdmin, token, setToken } = useContext(StoreContext);
    const [data, setData] = useState({
      email: "",
      password: "",
    });
    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData((data) => ({ ...data, [name]: value }));

  };
  console.log(data);
  

  const handleFlip = () => {
    // so here its negate the value whether it true or false . if true it negate to false
    setIsFlipped(!isFlipped);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
       const response = await axios.post(SERVER_URL + "/user/login", data);
       if (response.data.success) {
         if (response.data.role === "admin") {
           setToken(response.data.token);
           setAdmin(true);
           localStorage.setItem("token", response.data.token);
           localStorage.setItem("admin", true);
            setSideBar(true);
            setHorizontal(true);
           toast.success("Login Successfully");
           navigate("/add");
         } else {
           toast.error("You are not an admin");
         }
       } else {
         toast.error(response.data.message);
       }
   
    
    // navigate("/add");
  };
  

  return (
    <div className="page card-1-page">
      <div className="cards shadow">
        <label id="summary">
          {/* <input type="checkbox" /> */}
          {/* <div className="card">
            <div className={`cardFlip ${isFlipped ? "flipped" : ""}`}>
              <div className="front">
                <header>
                  <h2>Login</h2>
                  
                </header>
                <div className="content">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3  "
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                  </FloatingLabel>
                  <button
                    style={{ backgroundColor: "#ff6347" }}
                    className="btn mt-4 w-100 "
                    onClick={() => handleLogin()}
                  >
                    Login
                  </button>
                  <p>
                    Don&#39;t have an account?{"  "}
                    <span onClick={handleFlip} className="flip-link">
                      Sign Up
                    </span>
                  </p>
                </div>
              </div>
              <div className="back">
                <header>
                  <h2>Sign Up</h2>
                </header>
                <div className="content">
                  <FloatingLabel
                    controlId="floatingName"
                    label="Name"
                    className="mb-3  "
                  >
                    <Form.Control type="text" placeholder="Name" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3  "
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                  </FloatingLabel>
                  <button
                    style={{ backgroundColor: "#ff6347" }}
                    className="btn mt-4 w-100 "
                  >
                    Sign Up
                  </button>
                  <p>
                    Already have an account?{" "}
                    <span onClick={handleFlip} className="flip-link">
                      Click here
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="card">
            <div className={`cardFlip ${isFlipped ? "flipped" : ""}`}>
              <div
                className="front"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5rem",
                }}
              >
                <div className="content">
                  <h1 style={{ color: "white", textAlign: "center" }}>
                    Welcome Tomato&#39;s admin Panel
                  </h1>
                  <p style={{ color: "white", textAlign: "center" }}>
                    Savor Control, Harvest Success!
                  </p>
                </div>
                <p style={{ fontSize: "18px", textAlign: "center" }}>
                  Already have an account?{"  "}
                  <span onClick={handleFlip} className="flip-link">
                    Login
                  </span>
                </p>
              </div>
              <div className="back">
                <form onSubmit={ handleLogin}>
                  <header>
                    <h2>Login</h2>
                    {/* <span className="material-symbols-outlined"> more_vert </span> */}
                  </header>
                  <div className="login-popup">
                    <input
                      name="email"
                      onChange={onChangeHandler}
                      value={data.email}
                      type="email"
                      placeholder="name@example.com"
                      required
                      className=" mb-3  "
                    />

                    <input
                      name="password"
                      onChange={onChangeHandler}
                      value={data.password}
                      type="password"
                      placeholder="Password"
                    />

                    <button
                      style={{ backgroundColor: "#ff6347" }}
                      className="btn mt-4 w-100 "
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <p>
                  <span onClick={handleFlip} className="flip-link">
                    Back
                  </span>
                </p>
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default SignUp