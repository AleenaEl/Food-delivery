// import React from 'react'

import { useState } from "react"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import './Home.css'
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"
import AppDownload from "../../components/AppDownload/AppDownload"
import LoginPopup from "../../components/LoginPopup/LoginPopup"




function Home() {
    const [category, setCategory] = useState("All");
    const [showLogin, setShowLogin] = useState(false);
    return (
      <>
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
        <div className="home">
          <Navbar setShowLogin={setShowLogin} />
          <Header />
          <ExploreMenu category={category} setCategory={setCategory} />
          <FoodDisplay category={category} />
          <AppDownload />
        </div>
      </>
    );
}

export default Home