/* eslint-disable no-unused-vars */

import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import SignUp from './pages/SignUp/SignUp'
// import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Add from './pages/Add/Add'
import Orders from './pages/Orders/Orders'
import List from './pages/List/List'
import {  useEffect, useState } from 'react'
import SideBar from './components/SideBar/SideBar'
import Update from './pages/Update/Update'
// import SideBar from './components/SideBar/SideBar'
function App() {
  const [sideBar, setSideBar] = useState(false)
  const [horizontal, setHorizontal] = useState(false)

  const url=useLocation()
  const route = () => {
    if (
      url.pathname == "/orders" ||
      url.pathname == "/add" ||
      url.pathname == "/list" ||
      url.pathname.startsWith("/update/")
    ) {
      setSideBar(true);
      setHorizontal(true);
    } 
  }

  useEffect(() => {
    route()
    console.log(sideBar);
    
  }, []);
  return (
    <>
      {url.pathname !== "/" &&
      
      <Navbar
        horizontal={horizontal}
        setSideBar={setSideBar}
        setHorizontal={setHorizontal}
      />
      }
      <div className="app-content">
        {sideBar ? <SideBar /> : <></>}
        <Routes>
          <Route
            path="/"
            element={
              <SignUp setSideBar={setSideBar} setHorizontal={setHorizontal} />
            }
          />
          {/* <Route path="/home" element={<Home />} /> */}

          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          {/* <Route path='/update' element={ <Update/>} /> */}
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </>
  );
}

export default App
