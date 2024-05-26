/* eslint-disable react/jsx-key */
// import React from 'react'
import { useState } from 'react';
import './SignUp.css'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";


function SignUp() {
  const [isFlipped, setIsFlipped] = useState(false)
  
  const handleFlip = () => {
    // so here its negate the value whether it true or false . if true it negate to false
    setIsFlipped(!isFlipped)
  }
    
  return (
    <section className="page card-1-page">
      <div className="cards shadow">
        <label id="summary">
          {/* <input type="checkbox" /> */}
          <div className="card">
            <div className={`cardFlip ${isFlipped ? "flipped" : ""}`}>
              <div className="front">
                <header>
                  <h2>Login</h2>
                  {/* <span className="material-symbols-outlined"> more_vert </span> */}
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
          </div>
        </label>
      </div>
    </section>
  );
}

export default SignUp