

import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import Verify from './pages/Verify/Verify';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Navbar from './components/Navbar/Navbar';
import Myorders from './pages/Myorders/Myorders';



function App() {
  const [showLogin, setShowLogin] = useState(false);
const location = useLocation();
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        {location.pathname!=="/" &&  <Navbar setShowLogin={setShowLogin} />}
        
       
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<Myorders />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App
