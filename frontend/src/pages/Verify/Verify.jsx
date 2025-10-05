import React, { useContext, useEffect, useState } from 'react'
import "./Verify.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
function Verify() {
    const [searchParams, setSearchParams] = useSearchParams()
    const success=searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const { url } = useContext(StoreContext)
    const navigate=useNavigate()
    
    const verifyOrder = async () => {
        const response = await axios.post(url + "/order/verify", { success, orderId })
        if (response.data.success) {
            navigate("/myorders")
        } else {
            navigate("/home")
        }
    }
    useEffect(() => {
     verifyOrder()   
    },[])
  return (
      <div className='verify'>
          <div className="spinner">
              
          </div>
    </div>
  )
}

export default Verify