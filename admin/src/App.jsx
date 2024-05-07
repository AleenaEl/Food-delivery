
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'


function App() {


  return (
    <>
    <Navbar />
      
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App
