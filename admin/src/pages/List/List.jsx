/* eslint-disable no-unused-vars */
// import React from 'react'
import { useEffect, useState } from 'react';
import './List.css'
import axios from 'axios';
import { SERVER_URL } from '../../Services/server_url';
import { toast } from "react-hot-toast";
import { Link } from 'react-router-dom';


function List() {

  //state to hold the data to list
  const [list, setList] = useState([])
  
  // to list the data
  const fetchList = async () => {
    //api call
    const response = await axios.get(`${SERVER_URL}/food/list`)
    // console.log(response.data);
    if (response.data.success) {
      // set the values from the data field in the response 
      setList(response.data.data)
      // console.log(list);
    } else {
      toast.error(response.data.message)
    }
  }
// to remove fooditem
  const removeFood = async (foodId) => {
    const response = await axios.post(`${SERVER_URL}/food/remove`, { id: foodId })
    // to display the list affter deletion call fetchlist()
    await fetchList()
    if (response.data.success) {
      toast(response.data.message, {
        icon: "😀",
      });
    } else {
      toast.error(response.data.message);
    }
  }
  useEffect(() => {
    // call the fn when page reloads
  fetchList()
  }, [])
  


  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              {/* <img src={`${SERVER_URL}/images/` + item.image} alt="" /> */}
              <img src={ item.image} alt="" />
              <p>{item.name}</p>
              <p className='category'>{item.category}</p>
              <p>${item.price}</p>
              <div className="d-flex ">
                <p onClick={() => removeFood(item._id)} className=" btn">
                  X
                </p>
                <Link to={`/update/${item._id}`}>
                  <p className="  btn">📝</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List
